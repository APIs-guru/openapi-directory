package operations

type GetDeleteVirtualMfaDeviceActionEnum string

const (
	GetDeleteVirtualMfaDeviceActionEnumDeleteVirtualMfaDevice GetDeleteVirtualMfaDeviceActionEnum = "DeleteVirtualMFADevice"
)

type GetDeleteVirtualMfaDeviceVersionEnum string

const (
	GetDeleteVirtualMfaDeviceVersionEnumTwoThousandAndTen0508 GetDeleteVirtualMfaDeviceVersionEnum = "2010-05-08"
)

type GetDeleteVirtualMfaDeviceQueryParams struct {
	Action       GetDeleteVirtualMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SerialNumber string                               `queryParam:"style=form,explode=true,name=SerialNumber"`
	Version      GetDeleteVirtualMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteVirtualMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteVirtualMfaDeviceRequest struct {
	QueryParams GetDeleteVirtualMfaDeviceQueryParams
	Headers     GetDeleteVirtualMfaDeviceHeaders
}

type GetDeleteVirtualMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
