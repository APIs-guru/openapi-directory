package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendAPIPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type GetBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes"`
	APIName             *string                              `json:"ApiName"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType"`
	Service             *string                              `json:"Service"`
	TransformSchema     *string                              `json:"TransformSchema"`
}

type GetBackendAPIRequestBody struct {
	ResourceConfig *GetBackendAPIRequestBodyResourceConfig `json:"resourceConfig"`
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
