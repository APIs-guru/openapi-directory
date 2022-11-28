package operations

import (
	"openapi/pkg/models/shared"
)

type DetachTypedLinkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// DetachTypedLinkRequestBodyTypedLinkSpecifier
// Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
type DetachTypedLinkRequestBodyTypedLinkSpecifier struct {
	IdentityAttributeValues []shared.AttributeNameAndValue      `json:"IdentityAttributeValues,omitempty"`
	SourceObjectReference   *shared.ObjectReference             `json:"SourceObjectReference,omitempty"`
	TargetObjectReference   *shared.ObjectReference             `json:"TargetObjectReference,omitempty"`
	TypedLinkFacet          *shared.TypedLinkSchemaAndFacetName `json:"TypedLinkFacet,omitempty"`
}

type DetachTypedLinkRequestBody struct {
	TypedLinkSpecifier DetachTypedLinkRequestBodyTypedLinkSpecifier `json:"TypedLinkSpecifier"`
}

type DetachTypedLinkRequest struct {
	Headers DetachTypedLinkHeaders
	Request DetachTypedLinkRequestBody `request:"mediaType=application/json"`
}

type DetachTypedLinkResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
