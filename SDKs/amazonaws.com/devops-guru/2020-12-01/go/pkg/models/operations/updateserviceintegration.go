package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateServiceIntegrationRequestBodyServiceIntegration
//
//	Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru.
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
