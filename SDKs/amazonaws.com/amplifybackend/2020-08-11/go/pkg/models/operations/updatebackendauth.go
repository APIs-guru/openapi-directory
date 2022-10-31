package operations

import (
"openapi/pkg/models/shared")

type UpdateBackendAuthPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
    
}

type UpdateBackendAuthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateBackendAuthRequestBodyResourceConfig struct {
    AuthResources *shared.AuthResourcesEnum `json:"AuthResources,omitempty"`
    IdentityPoolConfigs *shared.UpdateBackendAuthIdentityPoolConfig `json:"IdentityPoolConfigs,omitempty"`
    Service *shared.ServiceEnum `json:"Service,omitempty"`
    UserPoolConfigs *shared.UpdateBackendAuthUserPoolConfig `json:"UserPoolConfigs,omitempty"`
    
}

type UpdateBackendAuthRequestBody struct {
    ResourceConfig UpdateBackendAuthRequestBodyResourceConfig `json:"resourceConfig"`
    ResourceName string `json:"resourceName"`
    
}

type UpdateBackendAuthRequest struct {
    PathParams UpdateBackendAuthPathParams 
    Headers UpdateBackendAuthHeaders 
    Request UpdateBackendAuthRequestBody `request:"mediaType=application/json"`
    
}

type UpdateBackendAuthResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GatewayTimeoutException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateBackendAuthResponse *shared.UpdateBackendAuthResponse 
    
}

