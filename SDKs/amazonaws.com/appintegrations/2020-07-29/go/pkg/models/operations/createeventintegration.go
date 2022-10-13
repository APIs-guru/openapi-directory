package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEventIntegrationRequestBodyEventFilter struct {
	Source *string `json:"Source"`
}

type CreateEventIntegrationRequestBody struct {
	ClientToken    *string                                      `json:"ClientToken"`
	Description    *string                                      `json:"Description"`
	EventBridgeBus string                                       `json:"EventBridgeBus"`
	EventFilter    CreateEventIntegrationRequestBodyEventFilter `json:"EventFilter"`
	Name           string                                       `json:"Name"`
	Tags           map[string]string                            `json:"Tags"`
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
