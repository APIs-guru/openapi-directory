package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoreDevicePathParams struct {
	CoreDeviceThingName string `pathParam:"style=simple,explode=false,name=coreDeviceThingName"`
}

type GetCoreDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCoreDeviceRequest struct {
	PathParams GetCoreDevicePathParams
	Headers    GetCoreDeviceHeaders
}

type GetCoreDeviceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetCoreDeviceResponse     *shared.GetCoreDeviceResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
