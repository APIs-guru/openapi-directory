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

type DetachFromIndexRequestBodyIndexReference struct {
	Selector *string `json:"Selector,omitempty"`
}

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
	AccessDeniedException          *interface{}
	ContentType                    string
	DetachFromIndexResponse        *shared.DetachFromIndexResponse
	DirectoryNotEnabledException   *interface{}
	InternalServiceException       *interface{}
	InvalidArnException            *interface{}
	LimitExceededException         *interface{}
	NotIndexException              *interface{}
	ObjectAlreadyDetachedException *interface{}
	ResourceNotFoundException      *interface{}
	RetryableConflictException     *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
