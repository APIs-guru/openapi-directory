package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateObjectAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
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
