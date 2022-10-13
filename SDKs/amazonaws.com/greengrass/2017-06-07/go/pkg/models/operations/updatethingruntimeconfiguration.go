package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateThingRuntimeConfigurationPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
}

type UpdateThingRuntimeConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration struct {
	Telemetry *shared.TelemetryEnum `json:"Telemetry"`
}

type UpdateThingRuntimeConfigurationRequestBody struct {
	TelemetryConfiguration *UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration `json:"TelemetryConfiguration"`
}

type UpdateThingRuntimeConfigurationRequest struct {
	PathParams UpdateThingRuntimeConfigurationPathParams
	Headers    UpdateThingRuntimeConfigurationHeaders
	Request    UpdateThingRuntimeConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateThingRuntimeConfigurationResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	InternalServerErrorException            *interface{}
	StatusCode                              int64
	UpdateThingRuntimeConfigurationResponse map[string]interface{}
}
