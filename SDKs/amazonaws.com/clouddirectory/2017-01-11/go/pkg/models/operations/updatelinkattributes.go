package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinkAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

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
	UpdateLinkAttributesResponse map[string]interface{}
	ValidationException          *interface{}
}
