package operations

type DetachPolicyPathParams struct {
	PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
}

type DetachPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DetachPolicyRequestBody struct {
	Target string `json:"target"`
}

type DetachPolicyRequest struct {
	PathParams DetachPolicyPathParams
	Headers    DetachPolicyHeaders
	Request    DetachPolicyRequestBody `request:"mediaType=application/json"`
}

type DetachPolicyResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
