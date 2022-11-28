package operations

import (
	"openapi/pkg/models/shared"
)

type DetachFromIndexHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// DetachFromIndexRequestBodyIndexReference
// The reference that identifies an object.
type DetachFromIndexRequestBodyIndexReference struct {
	Selector *string `json:"Selector,omitempty"`
}

// DetachFromIndexRequestBodyTargetReference
// The reference that identifies an object.
type DetachFromIndexRequestBodyTargetReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type DetachFromIndexRequestBody struct {
	IndexReference  DetachFromIndexRequestBodyIndexReference  `json:"IndexReference"`
	TargetReference DetachFromIndexRequestBodyTargetReference `json:"TargetReference"`
}

type DetachFromIndexRequest struct {
	Headers DetachFromIndexHeaders
	Request DetachFromIndexRequestBody `request:"mediaType=application/json"`
}

type DetachFromIndexResponse struct {
	AccessDeniedException          *shared.AccessDeniedException
	ContentType                    string
	DetachFromIndexResponse        *shared.DetachFromIndexResponse
	DirectoryNotEnabledException   *shared.DirectoryNotEnabledException
	InternalServiceException       *shared.InternalServiceException
	InvalidArnException            *shared.InvalidArnException
	LimitExceededException         *shared.LimitExceededException
	NotIndexException              *shared.NotIndexException
	ObjectAlreadyDetachedException *shared.ObjectAlreadyDetachedException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	RetryableConflictException     *shared.RetryableConflictException
	StatusCode                     int64
	ValidationException            *shared.ValidationException
}
