package operations



type DisableTopicRulePathParams struct {
    RuleName string `pathParam:"style=simple,explode=false,name=ruleName"`
    
}

type DisableTopicRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisableTopicRuleRequest struct {
    PathParams DisableTopicRulePathParams 
    Headers DisableTopicRuleHeaders 
    
}

type DisableTopicRuleResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

