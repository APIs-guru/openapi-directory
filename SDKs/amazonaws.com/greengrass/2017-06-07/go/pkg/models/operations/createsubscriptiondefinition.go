package operations

import (
"openapi/pkg/models/shared")

type CreateSubscriptionDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznClientToken *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
    
}

type CreateSubscriptionDefinitionRequestBodyInitialVersion struct {
    Subscriptions []shared.Subscription `json:"Subscriptions,omitempty"`
    
}

type CreateSubscriptionDefinitionRequestBody struct {
    InitialVersion *CreateSubscriptionDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
    Name *string `json:"Name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateSubscriptionDefinitionRequest struct {
    Headers CreateSubscriptionDefinitionHeaders 
    Request CreateSubscriptionDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type CreateSubscriptionDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateSubscriptionDefinitionResponse *shared.CreateSubscriptionDefinitionResponse 
    StatusCode int64 
    
}

