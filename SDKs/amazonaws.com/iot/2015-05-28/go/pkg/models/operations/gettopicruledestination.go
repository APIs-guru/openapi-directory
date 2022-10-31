package operations

import (
	"openapi/pkg/models/shared"
)

type GetTopicRuleDestinationPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=arn"`
}

type GetTopicRuleDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
