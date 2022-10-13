package operations

import (
	"openapi/pkg/models/shared"
)

type DetachPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type DetachPolicyRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type DetachPolicyRequestBodyPolicyReference struct {
	Selector *string `json:"Selector"`
}

type DetachPolicyRequestBody struct {
	ObjectReference DetachPolicyRequestBodyObjectReference `json:"ObjectReference"`
	PolicyReference DetachPolicyRequestBodyPolicyReference `json:"PolicyReference"`
}

type DetachPolicyRequest struct {
	Headers DetachPolicyHeaders
	Request DetachPolicyRequestBody `request:"mediaType=application/json"`
}

type DetachPolicyResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DetachPolicyResponse         map[string]interface{}
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
