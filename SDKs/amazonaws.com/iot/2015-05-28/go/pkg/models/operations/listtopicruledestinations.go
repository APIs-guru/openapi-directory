package operations

import (
	"openapi/pkg/models/shared"
)

type ListTopicRuleDestinationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTopicRuleDestinationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTopicRuleDestinationsRequest struct {
	QueryParams ListTopicRuleDestinationsQueryParams
	Headers     ListTopicRuleDestinationsHeaders
}

type ListTopicRuleDestinationsResponse struct {
	ContentType                       string
	InternalException                 *interface{}
	InvalidRequestException           *interface{}
	ListTopicRuleDestinationsResponse *shared.ListTopicRuleDestinationsResponse
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	UnauthorizedException             *interface{}
}
