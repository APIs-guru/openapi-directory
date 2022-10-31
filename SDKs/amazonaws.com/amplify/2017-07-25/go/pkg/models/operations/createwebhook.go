package operations

import (
"openapi/pkg/models/shared")

type CreateWebhookPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type CreateWebhookHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateWebhookRequestBody struct {
    BranchName string `json:"branchName"`
    Description *string `json:"description,omitempty"`
    
}

type CreateWebhookRequest struct {
    PathParams CreateWebhookPathParams 
    Headers CreateWebhookHeaders 
    Request CreateWebhookRequestBody `request:"mediaType=application/json"`
    
}

type CreateWebhookResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateWebhookResult *shared.CreateWebhookResult 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

