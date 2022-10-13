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
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	FacetNotFoundException       *shared.FacetNotFoundException
	FacetValidationException     *shared.FacetValidationException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidFacetUpdateException  *shared.InvalidFacetUpdateException
	InvalidRuleException         *shared.InvalidRuleException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	UpdateTypedLinkFacetResponse map[string]interface{}
	ValidationException          *shared.ValidationException
}
