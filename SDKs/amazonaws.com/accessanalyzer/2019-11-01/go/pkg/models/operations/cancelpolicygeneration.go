package operations

type CancelPolicyGenerationPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type CancelPolicyGenerationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelPolicyGenerationRequest struct {
	PathParams CancelPolicyGenerationPathParams
	Headers    CancelPolicyGenerationHeaders
}

type CancelPolicyGenerationResponse struct {
	AccessDeniedException          *interface{}
	CancelPolicyGenerationResponse map[string]interface{}
	ContentType                    string
	InternalServerException        *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
