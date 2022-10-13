package operations

import (
	"openapi/pkg/models/shared"
)

type AttachObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type AttachObjectRequestBodyChildReference struct {
	Selector *string `json:"Selector"`
}

type AttachObjectRequestBodyParentReference struct {
	Selector *string `json:"Selector"`
}

type AttachObjectRequestBody struct {
	ChildReference  AttachObjectRequestBodyChildReference  `json:"ChildReference"`
	LinkName        string                                 `json:"LinkName"`
	ParentReference AttachObjectRequestBodyParentReference `json:"ParentReference"`
}

type AttachObjectRequest struct {
	Headers AttachObjectHeaders
	Request AttachObjectRequestBody `request:"mediaType=application/json"`
}

type AttachObjectResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	AttachObjectResponse          *shared.AttachObjectResponse
	ContentType                   string
	DirectoryNotEnabledException  *shared.DirectoryNotEnabledException
	FacetValidationException      *shared.FacetValidationException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	InvalidAttachmentException    *shared.InvalidAttachmentException
	LimitExceededException        *shared.LimitExceededException
	LinkNameAlreadyInUseException *shared.LinkNameAlreadyInUseException
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
