package operations

type DetachPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type DetachPolicyRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type DetachPolicyRequestBodyPolicyReference struct {
	Selector *string `json:"Selector,omitempty"`
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
	AccessDeniedException        *interface{}
	ContentType                  string
	DetachPolicyResponse         map[string]interface{}
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	NotPolicyException           *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
