package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateEventIntegrationRequestBodyEventFilter struct {
	Source *string `json:"Source,omitempty"`
}

type CreateEventIntegrationRequestBody struct {
	ClientToken    *string                                      `json:"ClientToken,omitempty"`
	Description    *string                                      `json:"Description,omitempty"`
	EventBridgeBus string                                       `json:"EventBridgeBus"`
	EventFilter    CreateEventIntegrationRequestBodyEventFilter `json:"EventFilter"`
	Name           string                                       `json:"Name"`
	Tags           map[string]string                            `json:"Tags,omitempty"`
}

type CreateEventIntegrationRequest struct {
	Headers CreateEventIntegrationHeaders
	Request CreateEventIntegrationRequestBody `request:"mediaType=application/json"`
}

type CreateEventIntegrationResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	CreateEventIntegrationResponse *shared.CreateEventIntegrationResponse
	DuplicateResourceException     *interface{}
	InternalServiceError           *interface{}
	InvalidRequestException        *interface{}
	ResourceQuotaExceededException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
