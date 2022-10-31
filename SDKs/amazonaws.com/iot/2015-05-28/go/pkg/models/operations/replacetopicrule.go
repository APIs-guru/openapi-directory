package operations

import (
"openapi/pkg/models/shared")

type ReplaceTopicRulePathParams struct {
    RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
    
}

type ReplaceTopicRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ReplaceTopicRuleRequestBodyTopicRulePayload struct {
    Actions []shared.Action `json:"actions,omitempty"`
    AwsIotSQLVersion *string `json:"awsIotSqlVersion,omitempty"`
    Description *string `json:"description,omitempty"`
    ErrorAction *shared.Action `json:"errorAction,omitempty"`
    RuleDisabled *bool `json:"ruleDisabled,omitempty"`
    SQL *string `json:"sql,omitempty"`
    
}

type ReplaceTopicRuleRequestBody struct {
    TopicRulePayload ReplaceTopicRuleRequestBodyTopicRulePayload `json:"topicRulePayload"`
    
}

type ReplaceTopicRuleRequest struct {
    PathParams ReplaceTopicRulePathParams 
    Headers ReplaceTopicRuleHeaders 
    Request ReplaceTopicRuleRequestBody `request:"mediaType=application/json"`
    
}

type ReplaceTopicRuleResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    SQLParseException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

