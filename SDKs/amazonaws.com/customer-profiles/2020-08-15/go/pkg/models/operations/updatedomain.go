package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type UpdateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDomainRequestBodyMatching struct {
	Enabled *bool `json:"Enabled,omitempty"`
}

type UpdateDomainRequestBody struct {
	DeadLetterQueueURL    *string                          `json:"DeadLetterQueueUrl,omitempty"`
	DefaultEncryptionKey  *string                          `json:"DefaultEncryptionKey,omitempty"`
	DefaultExpirationDays *int64                           `json:"DefaultExpirationDays,omitempty"`
	Matching              *UpdateDomainRequestBodyMatching `json:"Matching,omitempty"`
	Tags                  map[string]string                `json:"Tags,omitempty"`
}

type UpdateDomainRequest struct {
	PathParams UpdateDomainPathParams
	Headers    UpdateDomainHeaders
	Request    UpdateDomainRequestBody `request:"mediaType=application/json"`
}

type UpdateDomainResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateDomainResponse      *shared.UpdateDomainResponse
}
