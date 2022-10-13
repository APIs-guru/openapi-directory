package operations

import (
	"openapi/pkg/models/shared"
)

type GetTopicRulePathParams struct {
	RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type GetTopicRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTopicRuleRequest struct {
	PathParams GetTopicRulePathParams
	Headers    GetTopicRuleHeaders
}

type GetTopicRuleResponse struct {
	ContentType                 string
	GetTopicRuleResponse        *shared.GetTopicRuleResponse
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
