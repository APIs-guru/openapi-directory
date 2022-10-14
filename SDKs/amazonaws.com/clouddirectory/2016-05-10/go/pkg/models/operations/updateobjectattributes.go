package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateObjectAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type UpdateObjectAttributesRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type UpdateObjectAttributesRequestBody struct {
	AttributeUpdates []shared.ObjectAttributeUpdate                   `json:"AttributeUpdates"`
	ObjectReference  UpdateObjectAttributesRequestBodyObjectReference `json:"ObjectReference"`
}

type UpdateObjectAttributesRequest struct {
	Headers UpdateObjectAttributesHeaders
	Request UpdateObjectAttributesRequestBody `request:"mediaType=application/json"`
}

type UpdateObjectAttributesResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	DirectoryNotEnabledException   *shared.DirectoryNotEnabledException
	FacetValidationException       *shared.FacetValidationException
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	LimitExceededException         *shared.LimitExceededException
	LinkNameAlreadyInUseException  *shared.LinkNameAlreadyInUseException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	UpdateObjectAttributesResponse *shared.UpdateObjectAttributesResponse
	ValidationException            *shared.ValidationException
}
