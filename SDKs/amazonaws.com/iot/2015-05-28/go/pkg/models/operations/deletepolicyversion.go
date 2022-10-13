package operations

type DeletePolicyVersionPathParams struct {
	PolicyName      string `pathParam:"style=simple,explode=false,name=policyName"`
	PolicyVersionID string `pathParam:"style=simple,explode=false,name=policyVersionId"`
}

type DeletePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeletePolicyVersionRequest struct {
	PathParams DeletePolicyVersionPathParams
	Headers    DeletePolicyVersionHeaders
}

type DeletePolicyVersionResponse struct {
	ContentType                 string
	DeleteConflictException     *interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
