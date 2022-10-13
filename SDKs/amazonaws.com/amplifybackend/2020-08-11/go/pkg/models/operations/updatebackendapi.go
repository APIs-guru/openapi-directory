package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type UpdateBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes"`
	APIName             *string                              `json:"ApiName"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType"`
	Service             *string                              `json:"Service"`
	TransformSchema     *string                              `json:"TransformSchema"`
}

type UpdateBackendAPIRequestBody struct {
	ResourceConfig *UpdateBackendAPIRequestBodyResourceConfig `json:"resourceConfig"`
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
