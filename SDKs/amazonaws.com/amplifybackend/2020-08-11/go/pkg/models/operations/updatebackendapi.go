package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type UpdateBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateBackendAPIRequestBodyResourceConfig
// The resource config for the data model, configured as a part of the Amplify project.
type UpdateBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes,omitempty"`
	APIName             *string                              `json:"ApiName,omitempty"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType,omitempty"`
	Service             *string                              `json:"Service,omitempty"`
	TransformSchema     *string                              `json:"TransformSchema,omitempty"`
}

type UpdateBackendAPIRequestBody struct {
	ResourceConfig *UpdateBackendAPIRequestBodyResourceConfig `json:"resourceConfig,omitempty"`
	ResourceName   string                                     `json:"resourceName"`
}

type UpdateBackendAPIRequest struct {
	PathParams UpdateBackendAPIPathParams
	Headers    UpdateBackendAPIHeaders
	Request    UpdateBackendAPIRequestBody `request:"mediaType=application/json"`
}

type UpdateBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateBackendAPIResponse *shared.UpdateBackendAPIResponse
}
