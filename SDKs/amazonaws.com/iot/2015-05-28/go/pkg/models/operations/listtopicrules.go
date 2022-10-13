package operations

import (
	"openapi/pkg/models/shared"
)

type ListTopicRulesQueryParams struct {
	MaxResults   *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken    *string `queryParam:"style=form,explode=true,name=nextToken"`
	RuleDisabled *bool   `queryParam:"style=form,explode=true,name=ruleDisabled"`
	Topic        *string `queryParam:"style=form,explode=true,name=topic"`
}

type ListTopicRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTopicRulesRequest struct {
	QueryParams ListTopicRulesQueryParams
	Headers     ListTopicRulesHeaders
}

type ListTopicRulesResponse struct {
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	ListTopicRulesResponse      *shared.ListTopicRulesResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
