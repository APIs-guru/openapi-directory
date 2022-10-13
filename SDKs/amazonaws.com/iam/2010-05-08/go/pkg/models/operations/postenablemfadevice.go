package operations

type PostEnableMfaDeviceActionEnum string

const (
	PostEnableMfaDeviceActionEnumEnableMfaDevice PostEnableMfaDeviceActionEnum = "EnableMFADevice"
)

type PostEnableMfaDeviceVersionEnum string

const (
	PostEnableMfaDeviceVersionEnumTwoThousandAndTen0508 PostEnableMfaDeviceVersionEnum = "2010-05-08"
)

type PostEnableMfaDeviceQueryParams struct {
	Action  PostEnableMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostEnableMfaDeviceRequest struct {
	QueryParams PostEnableMfaDeviceQueryParams
	Headers     PostEnableMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
