package operations

type PostUntagMfaDeviceActionEnum string

const (
	PostUntagMfaDeviceActionEnumUntagMfaDevice PostUntagMfaDeviceActionEnum = "UntagMFADevice"
)

type PostUntagMfaDeviceVersionEnum string

const (
	PostUntagMfaDeviceVersionEnumTwoThousandAndTen0508 PostUntagMfaDeviceVersionEnum = "2010-05-08"
)

type PostUntagMfaDeviceQueryParams struct {
	Action  PostUntagMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUntagMfaDeviceRequest struct {
	QueryParams PostUntagMfaDeviceQueryParams
	Headers     PostUntagMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
