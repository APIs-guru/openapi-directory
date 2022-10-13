package operations

type DeleteTopicRuleDestinationPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=arn"`
}

type DeleteTopicRuleDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteTopicRuleDestinationRequest struct {
	PathParams DeleteTopicRuleDestinationPathParams
	Headers    DeleteTopicRuleDestinationHeaders
}

type DeleteTopicRuleDestinationResponse struct {
	ConflictingResourceUpdateException *interface{}
	ContentType                        string
	DeleteTopicRuleDestinationResponse map[string]interface{}
	InternalException                  *interface{}
	InvalidRequestException            *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
}
