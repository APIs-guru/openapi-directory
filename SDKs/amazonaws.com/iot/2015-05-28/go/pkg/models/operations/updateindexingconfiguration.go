package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIndexingConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration struct {
	CustomFields           []shared.Field                     `json:"customFields"`
	ManagedFields          []shared.Field                     `json:"managedFields"`
	ThingGroupIndexingMode *shared.ThingGroupIndexingModeEnum `json:"thingGroupIndexingMode"`
}

type UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration struct {
	CustomFields                  []shared.Field                            `json:"customFields"`
	ManagedFields                 []shared.Field                            `json:"managedFields"`
	ThingConnectivityIndexingMode *shared.ThingConnectivityIndexingModeEnum `json:"thingConnectivityIndexingMode"`
	ThingIndexingMode             *shared.ThingIndexingModeEnum             `json:"thingIndexingMode"`
}

type UpdateIndexingConfigurationRequestBody struct {
	ThingGroupIndexingConfiguration *UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration `json:"thingGroupIndexingConfiguration"`
	ThingIndexingConfiguration      *UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration      `json:"thingIndexingConfiguration"`
}

type UpdateIndexingConfigurationRequest struct {
	Headers UpdateIndexingConfigurationHeaders
	Request UpdateIndexingConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateIndexingConfigurationResponse struct {
	ContentType                         string
	InternalFailureException            *interface{}
	InvalidRequestException             *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	UnauthorizedException               *interface{}
	UpdateIndexingConfigurationResponse map[string]interface{}
}
