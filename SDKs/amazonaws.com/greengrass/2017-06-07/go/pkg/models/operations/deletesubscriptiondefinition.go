package operations



type DeleteSubscriptionDefinitionPathParams struct {
    SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
    
}

type DeleteSubscriptionDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSubscriptionDefinitionRequest struct {
    PathParams DeleteSubscriptionDefinitionPathParams 
    Headers DeleteSubscriptionDefinitionHeaders 
    
}

type DeleteSubscriptionDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteSubscriptionDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

