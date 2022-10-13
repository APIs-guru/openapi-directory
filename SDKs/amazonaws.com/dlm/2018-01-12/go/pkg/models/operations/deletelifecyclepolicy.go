package operations

type DeleteLifecyclePolicyPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policyId"`
}

type DeleteLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteLifecyclePolicyRequest struct {
	PathParams DeleteLifecyclePolicyPathParams
	Headers    DeleteLifecyclePolicyHeaders
}

type DeleteLifecyclePolicyResponse struct {
	ContentType                   string
	DeleteLifecyclePolicyResponse map[string]interface{}
	InternalServerException       *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
