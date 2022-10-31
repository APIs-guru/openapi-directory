package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceDefinitionPathParams struct {
	DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
}

type GetDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
