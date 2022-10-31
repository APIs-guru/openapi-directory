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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
