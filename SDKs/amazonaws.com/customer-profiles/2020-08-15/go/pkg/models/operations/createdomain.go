package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type CreateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDomainRequestBodyMatching struct {
	Enabled *bool `json:"Enabled,omitempty"`
}

type CreateDomainRequestBody struct {
	DeadLetterQueueURL    *string                          `json:"DeadLetterQueueUrl,omitempty"`
	DefaultEncryptionKey  *string                          `json:"DefaultEncryptionKey,omitempty"`
	DefaultExpirationDays int64                            `json:"DefaultExpirationDays"`
	Matching              *CreateDomainRequestBodyMatching `json:"Matching,omitempty"`
	Tags                  map[string]string                `json:"Tags,omitempty"`
}

type CreateDomainRequest struct {
	PathParams CreateDomainPathParams
	Headers    CreateDomainHeaders
	Request    CreateDomainRequestBody `request:"mediaType=application/json"`
}

type CreateDomainResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	CreateDomainResponse      *shared.CreateDomainResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
