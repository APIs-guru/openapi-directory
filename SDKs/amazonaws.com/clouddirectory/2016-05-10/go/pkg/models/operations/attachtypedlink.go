package operations

import (
	"openapi/pkg/models/shared"
)

type AttachTypedLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type AttachTypedLinkRequestBodySourceObjectReference struct {
	Selector *string `json:"Selector"`
}

type AttachTypedLinkRequestBodyTargetObjectReference struct {
	Selector *string `json:"Selector"`
}

type AttachTypedLinkRequestBodyTypedLinkFacet struct {
	SchemaArn     *string `json:"SchemaArn"`
	TypedLinkName *string `json:"TypedLinkName"`
}

type AttachTypedLinkRequestBody struct {
	Attributes            []shared.AttributeNameAndValue                  `json:"Attributes"`
	SourceObjectReference AttachTypedLinkRequestBodySourceObjectReference `json:"SourceObjectReference"`
	TargetObjectReference AttachTypedLinkRequestBodyTargetObjectReference `json:"TargetObjectReference"`
	TypedLinkFacet        AttachTypedLinkRequestBodyTypedLinkFacet        `json:"TypedLinkFacet"`
}

type AttachTypedLinkRequest struct {
	Headers AttachTypedLinkHeaders
	Request AttachTypedLinkRequestBody `request:"mediaType=application/json"`
}

type AttachTypedLinkResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	AttachTypedLinkResponse      *shared.AttachTypedLinkResponse
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	FacetValidationException     *shared.FacetValidationException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidAttachmentException   *shared.InvalidAttachmentException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
