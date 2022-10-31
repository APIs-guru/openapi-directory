package operations

import (
"openapi/pkg/models/shared")

type GetBackendAPIModelsPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
    
}

type GetBackendAPIModelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBackendAPIModelsRequestBody struct {
    ResourceName string `json:"resourceName"`
    
}

type GetBackendAPIModelsRequest struct {
    PathParams GetBackendAPIModelsPathParams 
    Headers GetBackendAPIModelsHeaders 
    Request GetBackendAPIModelsRequestBody `request:"mediaType=application/json"`
    
}

type GetBackendAPIModelsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GatewayTimeoutException *interface{} 
    GetBackendAPIModelsResponse *shared.GetBackendAPIModelsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

