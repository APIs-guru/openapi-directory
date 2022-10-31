package operations



type UpdateSubscriptionDefinitionPathParams struct {
    SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
    
}

type UpdateSubscriptionDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateSubscriptionDefinitionRequestBody struct {
    Name *string `json:"Name,omitempty"`
    
}

type UpdateSubscriptionDefinitionRequest struct {
    PathParams UpdateSubscriptionDefinitionPathParams 
    Headers UpdateSubscriptionDefinitionHeaders 
    Request UpdateSubscriptionDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateSubscriptionDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    StatusCode int64 
    UpdateSubscriptionDefinitionResponse map[string]interface{} 
    
}

