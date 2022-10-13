package operations

import (
	"openapi/pkg/models/shared"
)

type GetThingRuntimeConfigurationPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
}

type GetThingRuntimeConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetThingRuntimeConfigurationRequest struct {
	PathParams GetThingRuntimeConfigurationPathParams
	Headers    GetThingRuntimeConfigurationHeaders
}

type GetThingRuntimeConfigurationResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	GetThingRuntimeConfigurationResponse *shared.GetThingRuntimeConfigurationResponse
	InternalServerErrorException         *interface{}
	StatusCode                           int64
}
