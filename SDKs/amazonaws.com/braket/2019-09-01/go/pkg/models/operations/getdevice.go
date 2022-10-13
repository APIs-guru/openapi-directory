package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicePathParams struct {
	DeviceArn string `pathParam:"style=simple,explode=false,name=deviceArn"`
}

type GetDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeviceRequest struct {
	PathParams GetDevicePathParams
	Headers    GetDeviceHeaders
}

type GetDeviceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeviceOfflineException    *interface{}
	DeviceRetiredException    *interface{}
	GetDeviceResponse         *shared.GetDeviceResponse
	InternalServiceException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
