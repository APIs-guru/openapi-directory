package operations

import (
	"openapi/pkg/models/shared"
)

type DetachTypedLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DetachTypedLinkRequestBodyTypedLinkSpecifier struct {
	IdentityAttributeValues []shared.AttributeNameAndValue      `json:"IdentityAttributeValues"`
	SourceObjectReference   *shared.ObjectReference             `json:"SourceObjectReference"`
	TargetObjectReference   *shared.ObjectReference             `json:"TargetObjectReference"`
	TypedLinkFacet          *shared.TypedLinkSchemaAndFacetName `json:"TypedLinkFacet"`
}

type DetachTypedLinkRequestBody struct {
	TypedLinkSpecifier DetachTypedLinkRequestBodyTypedLinkSpecifier `json:"TypedLinkSpecifier"`
}

type DetachTypedLinkRequest struct {
	Headers DetachTypedLinkHeaders
	Request DetachTypedLinkRequestBody `request:"mediaType=application/json"`
}

type DetachTypedLinkResponse struct {
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
	ValidationException          *shared.ValidationException
}
