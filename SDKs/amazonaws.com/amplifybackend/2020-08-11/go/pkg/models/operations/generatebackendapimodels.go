package operations

import (
"openapi/pkg/models/shared")

type GenerateBackendAPIModelsPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
    
}

type GenerateBackendAPIModelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GenerateBackendAPIModelsRequestBody struct {
    ResourceName string `json:"resourceName"`
    
}

type GenerateBackendAPIModelsRequest struct {
    PathParams GenerateBackendAPIModelsPathParams 
    Headers GenerateBackendAPIModelsHeaders 
    Request GenerateBackendAPIModelsRequestBody `request:"mediaType=application/json"`
    
}

type GenerateBackendAPIModelsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GatewayTimeoutException *interface{} 
    GenerateBackendAPIModelsResponse *shared.GenerateBackendAPIModelsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

