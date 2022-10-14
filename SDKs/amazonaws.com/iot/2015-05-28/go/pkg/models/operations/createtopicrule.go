package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTopicRulePathParams struct {
	RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
}

type CreateTopicRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzTagging       *string `header:"name=x-amz-tagging"`
}

type CreateTopicRuleRequestBodyTopicRulePayload struct {
	Actions          []shared.Action `json:"actions,omitempty"`
	AwsIotSQLVersion *string         `json:"awsIotSqlVersion,omitempty"`
	Description      *string         `json:"description,omitempty"`
	ErrorAction      *shared.Action  `json:"errorAction,omitempty"`
	RuleDisabled     *bool           `json:"ruleDisabled,omitempty"`
	SQL              *string         `json:"sql,omitempty"`
}

type CreateTopicRuleRequestBody struct {
	TopicRulePayload CreateTopicRuleRequestBodyTopicRulePayload `json:"topicRulePayload"`
}

type CreateTopicRuleRequest struct {
	PathParams CreateTopicRulePathParams
	Headers    CreateTopicRuleHeaders
	Request    CreateTopicRuleRequestBody `request:"mediaType=application/json"`
}

type CreateTopicRuleResponse struct {
	ConflictingResourceUpdateException *interface{}
	ContentType                        string
	InternalException                  *interface{}
	InvalidRequestException            *interface{}
	ResourceAlreadyExistsException     *interface{}
	ServiceUnavailableException        *interface{}
	SQLParseException                  *interface{}
	StatusCode                         int64
}
