package operations

type PostResyncMfaDeviceActionEnum string

const (
	PostResyncMfaDeviceActionEnumResyncMfaDevice PostResyncMfaDeviceActionEnum = "ResyncMFADevice"
)

type PostResyncMfaDeviceVersionEnum string

const (
	PostResyncMfaDeviceVersionEnumTwoThousandAndTen0508 PostResyncMfaDeviceVersionEnum = "2010-05-08"
)

type PostResyncMfaDeviceQueryParams struct {
	Action  PostResyncMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResyncMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResyncMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResyncMfaDeviceRequest struct {
	QueryParams PostResyncMfaDeviceQueryParams
	Headers     PostResyncMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResyncMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
