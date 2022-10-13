package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTypedLinkFacetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
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
