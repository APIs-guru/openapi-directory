package operations

type DeleteTopicRulePathParams struct {
	RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type DeleteTopicRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteTopicRuleRequest struct {
	PathParams DeleteTopicRulePathParams
	Headers    DeleteTopicRuleHeaders
}

type DeleteTopicRuleResponse struct {
	ConflictingResourceUpdateException *interface{}
	ContentType                        string
	InternalException                  *interface{}
	InvalidRequestException            *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
}
