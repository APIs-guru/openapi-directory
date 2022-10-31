package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type DeleteBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes,omitempty"`
	APIName             *string                              `json:"ApiName,omitempty"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType,omitempty"`
	Service             *string                              `json:"Service,omitempty"`
	TransformSchema     *string                              `json:"TransformSchema,omitempty"`
}

type DeleteBackendAPIRequestBody struct {
	ResourceConfig *DeleteBackendAPIRequestBodyResourceConfig `json:"resourceConfig,omitempty"`
	ResourceName   string                                     `json:"resourceName"`
}

type DeleteBackendAPIRequest struct {
	PathParams DeleteBackendAPIPathParams
	Headers    DeleteBackendAPIHeaders
	Request    DeleteBackendAPIRequestBody `request:"mediaType=application/json"`
}

type DeleteBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DeleteBackendAPIResponse *shared.DeleteBackendAPIResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
