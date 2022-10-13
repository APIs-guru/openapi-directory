package operations

type PostTagMfaDeviceActionEnum string

const (
	PostTagMfaDeviceActionEnumTagMfaDevice PostTagMfaDeviceActionEnum = "TagMFADevice"
)

type PostTagMfaDeviceVersionEnum string

const (
	PostTagMfaDeviceVersionEnumTwoThousandAndTen0508 PostTagMfaDeviceVersionEnum = "2010-05-08"
)

type PostTagMfaDeviceQueryParams struct {
	Action  PostTagMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostTagMfaDeviceRequest struct {
	QueryParams PostTagMfaDeviceQueryParams
	Headers     PostTagMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
