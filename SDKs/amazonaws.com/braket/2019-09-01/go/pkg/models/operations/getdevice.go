package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicePathParams struct {
	DeviceArn string `pathParam:"style=simple,explode=false,name=deviceArn"`
}

type GetDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
