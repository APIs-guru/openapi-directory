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
	Selector *string `json:"Selector,omitempty"`
}

type AttachObjectRequestBodyParentReference struct {
	Selector *string `json:"Selector,omitempty"`
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
	AccessDeniedException         *interface{}
	AttachObjectResponse          *shared.AttachObjectResponse
	ContentType                   string
	DirectoryNotEnabledException  *interface{}
	FacetValidationException      *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	InvalidAttachmentException    *interface{}
	LimitExceededException        *interface{}
	LinkNameAlreadyInUseException *interface{}
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
