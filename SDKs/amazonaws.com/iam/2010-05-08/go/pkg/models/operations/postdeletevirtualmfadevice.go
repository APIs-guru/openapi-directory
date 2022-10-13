package operations

type PostDeleteVirtualMfaDeviceActionEnum string

const (
	PostDeleteVirtualMfaDeviceActionEnumDeleteVirtualMfaDevice PostDeleteVirtualMfaDeviceActionEnum = "DeleteVirtualMFADevice"
)

type PostDeleteVirtualMfaDeviceVersionEnum string

const (
	PostDeleteVirtualMfaDeviceVersionEnumTwoThousandAndTen0508 PostDeleteVirtualMfaDeviceVersionEnum = "2010-05-08"
)

type PostDeleteVirtualMfaDeviceQueryParams struct {
	Action  PostDeleteVirtualMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVirtualMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVirtualMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteVirtualMfaDeviceRequest struct {
	QueryParams PostDeleteVirtualMfaDeviceQueryParams
	Headers     PostDeleteVirtualMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVirtualMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
