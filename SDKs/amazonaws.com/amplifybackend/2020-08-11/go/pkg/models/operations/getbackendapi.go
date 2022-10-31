package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type GetBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes,omitempty"`
	APIName             *string                              `json:"ApiName,omitempty"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType,omitempty"`
	Service             *string                              `json:"Service,omitempty"`
	TransformSchema     *string                              `json:"TransformSchema,omitempty"`
}

type GetBackendAPIRequestBody struct {
	ResourceConfig *GetBackendAPIRequestBodyResourceConfig `json:"resourceConfig,omitempty"`
	ResourceName   string                                  `json:"resourceName"`
}

type GetBackendAPIRequest struct {
	PathParams GetBackendAPIPathParams
	Headers    GetBackendAPIHeaders
	Request    GetBackendAPIRequestBody `request:"mediaType=application/json"`
}

type GetBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetBackendAPIResponse    *shared.GetBackendAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
