package operations



type EnableTopicRulePathParams struct {
    RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
    
}

type EnableTopicRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type EnableTopicRuleRequest struct {
    PathParams EnableTopicRulePathParams 
    Headers EnableTopicRuleHeaders 
    
}

type EnableTopicRuleResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

