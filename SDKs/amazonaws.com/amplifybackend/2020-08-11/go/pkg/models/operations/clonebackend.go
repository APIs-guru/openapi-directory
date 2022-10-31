package operations

import (
"openapi/pkg/models/shared")

type CloneBackendPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
    
}

type CloneBackendHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CloneBackendRequestBody struct {
    TargetEnvironmentName string `json:"targetEnvironmentName"`
    
}

type CloneBackendRequest struct {
    PathParams CloneBackendPathParams 
    Headers CloneBackendHeaders 
    Request CloneBackendRequestBody `request:"mediaType=application/json"`
    
}

type CloneBackendResponse struct {
    BadRequestException *interface{} 
    CloneBackendResponse *shared.CloneBackendResponse 
    ContentType string 
    GatewayTimeoutException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

