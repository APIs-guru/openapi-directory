package operations

import (
"openapi/pkg/models/shared")

type CreateBackendHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateBackendRequestBody struct {
    AppID string `json:"appId"`
    AppName string `json:"appName"`
    BackendEnvironmentName string `json:"backendEnvironmentName"`
    ResourceConfig map[string]interface{} `json:"resourceConfig,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    
}

type CreateBackendRequest struct {
    Headers CreateBackendHeaders 
    Request CreateBackendRequestBody `request:"mediaType=application/json"`
    
}

type CreateBackendResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateBackendResponse *shared.CreateBackendResponse 
    GatewayTimeoutException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

