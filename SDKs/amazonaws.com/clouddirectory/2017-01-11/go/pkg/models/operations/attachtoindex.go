package operations

import (
	"openapi/pkg/models/shared"
)

type AttachToIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type AttachToIndexRequestBodyIndexReference struct {
	Selector *string `json:"Selector"`
}

type AttachToIndexRequestBodyTargetReference struct {
	Selector *string `json:"Selector"`
}

type AttachToIndexRequestBody struct {
	IndexReference  AttachToIndexRequestBodyIndexReference  `json:"IndexReference"`
	TargetReference AttachToIndexRequestBodyTargetReference `json:"TargetReference"`
}

type AttachToIndexRequest struct {
	Headers AttachToIndexHeaders
	Request AttachToIndexRequestBody `request:"mediaType=application/json"`
}

type AttachToIndexResponse struct {
	AccessDeniedException            *interface{}
	AttachToIndexResponse            *shared.AttachToIndexResponse
	ContentType                      string
	DirectoryNotEnabledException     *interface{}
	IndexedAttributeMissingException *interface{}
	InternalServiceException         *interface{}
	InvalidArnException              *interface{}
	InvalidAttachmentException       *interface{}
	LimitExceededException           *interface{}
	LinkNameAlreadyInUseException    *interface{}
	NotIndexException                *interface{}
	ResourceNotFoundException        *interface{}
	RetryableConflictException       *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
