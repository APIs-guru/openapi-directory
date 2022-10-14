package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateServiceIntegrationRequestBodyServiceIntegration struct {
	OpsCenter *shared.OpsCenterIntegrationConfig `json:"OpsCenter,omitempty"`
}

type UpdateServiceIntegrationRequestBody struct {
	ServiceIntegration UpdateServiceIntegrationRequestBodyServiceIntegration `json:"ServiceIntegration"`
}

type UpdateServiceIntegrationRequest struct {
	Headers UpdateServiceIntegrationHeaders
	Request UpdateServiceIntegrationRequestBody `request:"mediaType=application/json"`
}

type UpdateServiceIntegrationResponse struct {
	AccessDeniedException            *interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UpdateServiceIntegrationResponse map[string]interface{}
	ValidationException              *interface{}
}
