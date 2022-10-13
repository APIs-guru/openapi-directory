package operations

import (
	"openapi/pkg/models/shared"
)

type DetachFromIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DetachFromIndexRequestBodyIndexReference struct {
	Selector *string `json:"Selector"`
}

type DetachFromIndexRequestBodyTargetReference struct {
	Selector *string `json:"Selector"`
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
