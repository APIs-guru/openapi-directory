package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinkAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// UpdateLinkAttributesRequestBodyTypedLinkSpecifier
// Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
type UpdateLinkAttributesRequestBodyTypedLinkSpecifier struct {
	IdentityAttributeValues []shared.AttributeNameAndValue      `json:"IdentityAttributeValues,omitempty"`
	SourceObjectReference   *shared.ObjectReference             `json:"SourceObjectReference,omitempty"`
	TargetObjectReference   *shared.ObjectReference             `json:"TargetObjectReference,omitempty"`
	TypedLinkFacet          *shared.TypedLinkSchemaAndFacetName `json:"TypedLinkFacet,omitempty"`
}

type UpdateLinkAttributesRequestBody struct {
	AttributeUpdates   []shared.LinkAttributeUpdate                      `json:"AttributeUpdates"`
	TypedLinkSpecifier UpdateLinkAttributesRequestBodyTypedLinkSpecifier `json:"TypedLinkSpecifier"`
}

type UpdateLinkAttributesRequest struct {
	Headers UpdateLinkAttributesHeaders
	Request UpdateLinkAttributesRequestBody `request:"mediaType=application/json"`
}

type UpdateLinkAttributesResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	FacetValidationException     *shared.FacetValidationException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	UpdateLinkAttributesResponse map[string]interface{}
	ValidationException          *shared.ValidationException
}
