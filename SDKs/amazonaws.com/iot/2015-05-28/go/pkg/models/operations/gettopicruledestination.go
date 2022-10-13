package operations

import (
	"openapi/pkg/models/shared"
)

type GetTopicRuleDestinationPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=arn"`
}

type GetTopicRuleDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTopicRuleDestinationRequest struct {
	PathParams GetTopicRuleDestinationPathParams
	Headers    GetTopicRuleDestinationHeaders
}

type GetTopicRuleDestinationResponse struct {
	ContentType                     string
	GetTopicRuleDestinationResponse *shared.GetTopicRuleDestinationResponse
	InternalException               *interface{}
	InvalidRequestException         *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
