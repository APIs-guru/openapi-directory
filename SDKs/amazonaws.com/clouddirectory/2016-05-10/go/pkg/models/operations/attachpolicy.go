package operations

import (
	"openapi/pkg/models/shared"
)

type AttachPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type AttachPolicyRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type AttachPolicyRequestBodyPolicyReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type AttachPolicyRequestBody struct {
	ObjectReference AttachPolicyRequestBodyObjectReference `json:"ObjectReference"`
	PolicyReference AttachPolicyRequestBodyPolicyReference `json:"PolicyReference"`
}

type AttachPolicyRequest struct {
	Headers AttachPolicyHeaders
	Request AttachPolicyRequestBody `request:"mediaType=application/json"`
}

type AttachPolicyResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	AttachPolicyResponse         map[string]interface{}
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	NotPolicyException           *shared.NotPolicyException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
