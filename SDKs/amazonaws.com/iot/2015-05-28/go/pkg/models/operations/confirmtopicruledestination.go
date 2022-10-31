package operations



type ConfirmTopicRuleDestinationPathParams struct {
    ConfirmationToken string `pathParam:"style=simple,explode=false,name=confirmationToken"`
    
}

type ConfirmTopicRuleDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ConfirmTopicRuleDestinationRequest struct {
    PathParams ConfirmTopicRuleDestinationPathParams 
    Headers ConfirmTopicRuleDestinationHeaders 
    
}

type ConfirmTopicRuleDestinationResponse struct {
    ConfirmTopicRuleDestinationResponse map[string]interface{} 
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

