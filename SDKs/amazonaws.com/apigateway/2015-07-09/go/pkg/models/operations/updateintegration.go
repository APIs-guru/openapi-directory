package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIntegrationPathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIntegrationRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations"`
}

type UpdateIntegrationRequest struct {
	PathParams UpdateIntegrationPathParams
	Headers    UpdateIntegrationHeaders
	Request    UpdateIntegrationRequestBody `request:"mediaType=application/json"`
}

type UpdateIntegrationResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	Integration              *shared.Integration
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
