package operations

type AttachPolicyPathParams struct {
	PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
}

type AttachPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AttachPolicyRequestBody struct {
	Target string `json:"target"`
}

type AttachPolicyRequest struct {
	PathParams AttachPolicyPathParams
	Headers    AttachPolicyHeaders
	Request    AttachPolicyRequestBody `request:"mediaType=application/json"`
}

type AttachPolicyResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
