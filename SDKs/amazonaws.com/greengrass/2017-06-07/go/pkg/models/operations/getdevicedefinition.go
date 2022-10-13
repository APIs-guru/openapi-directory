package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceDefinitionPathParams struct {
	DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
}

type GetDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeviceDefinitionRequest struct {
	PathParams GetDeviceDefinitionPathParams
	Headers    GetDeviceDefinitionHeaders
}

type GetDeviceDefinitionResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetDeviceDefinitionResponse *shared.GetDeviceDefinitionResponse
	StatusCode                  int64
}
