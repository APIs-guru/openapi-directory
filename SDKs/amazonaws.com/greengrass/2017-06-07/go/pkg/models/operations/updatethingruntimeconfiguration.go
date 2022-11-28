package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateThingRuntimeConfigurationPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
}

type UpdateThingRuntimeConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
// Configuration settings for running telemetry.
type UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration struct {
	Telemetry *shared.TelemetryEnum `json:"Telemetry,omitempty"`
}

type UpdateThingRuntimeConfigurationRequestBody struct {
	TelemetryConfiguration *UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration `json:"TelemetryConfiguration,omitempty"`
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
