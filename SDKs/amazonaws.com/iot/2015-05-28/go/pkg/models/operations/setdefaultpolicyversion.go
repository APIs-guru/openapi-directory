package operations

type SetDefaultPolicyVersionPathParams struct {
	PolicyName      string `pathParam:"style=simple,explode=false,name=policyName"`
	PolicyVersionID string `pathParam:"style=simple,explode=false,name=policyVersionId"`
}

type SetDefaultPolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SetDefaultPolicyVersionRequest struct {
	PathParams SetDefaultPolicyVersionPathParams
	Headers    SetDefaultPolicyVersionHeaders
}

type SetDefaultPolicyVersionResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
