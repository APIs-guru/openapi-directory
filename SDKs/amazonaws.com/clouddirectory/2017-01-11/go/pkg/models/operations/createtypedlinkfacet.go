package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTypedLinkFacetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type CreateTypedLinkFacetRequestBodyFacet struct {
	Attributes             []shared.TypedLinkAttributeDefinition `json:"Attributes,omitempty"`
	IdentityAttributeOrder []string                              `json:"IdentityAttributeOrder,omitempty"`
	Name                   *string                               `json:"Name,omitempty"`
}

type CreateTypedLinkFacetRequestBody struct {
	Facet CreateTypedLinkFacetRequestBodyFacet `json:"Facet"`
}

type CreateTypedLinkFacetRequest struct {
	Headers CreateTypedLinkFacetHeaders
	Request CreateTypedLinkFacetRequestBody `request:"mediaType=application/json"`
}

type CreateTypedLinkFacetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreateTypedLinkFacetResponse map[string]interface{}
	FacetAlreadyExistsException  *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidRuleException         *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
