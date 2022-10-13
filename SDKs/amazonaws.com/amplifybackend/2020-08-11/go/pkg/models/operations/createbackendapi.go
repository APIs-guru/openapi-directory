package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAPIPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBackendAPIRequestBodyResourceConfig struct {
	AdditionalAuthTypes []shared.BackendAPIAuthType          `json:"AdditionalAuthTypes"`
	APIName             *string                              `json:"ApiName"`
	ConflictResolution  *shared.BackendAPIConflictResolution `json:"ConflictResolution"`
	DefaultAuthType     *shared.BackendAPIAuthType           `json:"DefaultAuthType"`
	Service             *string                              `json:"Service"`
	TransformSchema     *string                              `json:"TransformSchema"`
}

type CreateBackendAPIRequestBody struct {
	BackendEnvironmentName string                                    `json:"backendEnvironmentName"`
	ResourceConfig         CreateBackendAPIRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName           string                                    `json:"resourceName"`
}

type CreateBackendAPIRequest struct {
	PathParams CreateBackendAPIPathParams
	Headers    CreateBackendAPIHeaders
	Request    CreateBackendAPIRequestBody `request:"mediaType=application/json"`
}

type CreateBackendAPIResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateBackendAPIResponse *shared.CreateBackendAPIResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
