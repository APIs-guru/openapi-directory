package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTypedLinkFacetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type UpdateTypedLinkFacetRequestBody struct {
	AttributeUpdates       []shared.TypedLinkFacetAttributeUpdate `json:"AttributeUpdates"`
	IdentityAttributeOrder []string                               `json:"IdentityAttributeOrder"`
	Name                   string                                 `json:"Name"`
}

type UpdateTypedLinkFacetRequest struct {
	Headers UpdateTypedLinkFacetHeaders
	Request UpdateTypedLinkFacetRequestBody `request:"mediaType=application/json"`
}

type UpdateTypedLinkFacetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	FacetNotFoundException       *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidFacetUpdateException  *interface{}
	InvalidRuleException         *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	UpdateTypedLinkFacetResponse map[string]interface{}
	ValidationException          *interface{}
}
