package operations

type DetachPrincipalPolicyPathParams struct {
	PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
}

type DetachPrincipalPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznIotPrincipal string  `header:"name=x-amzn-iot-principal"`
}

type DetachPrincipalPolicyRequest struct {
	PathParams DetachPrincipalPolicyPathParams
	Headers    DetachPrincipalPolicyHeaders
}

type DetachPrincipalPolicyResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
