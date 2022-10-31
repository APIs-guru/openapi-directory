package operations

import (
"openapi/pkg/models/shared")

type CreateBackendAPIPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type CreateBackendAPIHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateBackendAPIRequestBodyResourceConfig struct {
    AdditionalAuthTypes []shared.BackendAPIAuthType `json:"AdditionalAuthTypes,omitempty"`
    APIName *string `json:"ApiName,omitempty"`
    ConflictResolution *shared.BackendAPIConflictResolution `json:"ConflictResolution,omitempty"`
    DefaultAuthType *shared.BackendAPIAuthType `json:"DefaultAuthType,omitempty"`
    Service *string `json:"Service,omitempty"`
    TransformSchema *string `json:"TransformSchema,omitempty"`
    
}

type CreateBackendAPIRequestBody struct {
    BackendEnvironmentName string `json:"backendEnvironmentName"`
    ResourceConfig CreateBackendAPIRequestBodyResourceConfig `json:"resourceConfig"`
    ResourceName string `json:"resourceName"`
    
}

type CreateBackendAPIRequest struct {
    PathParams CreateBackendAPIPathParams 
    Headers CreateBackendAPIHeaders 
    Request CreateBackendAPIRequestBody `request:"mediaType=application/json"`
    
}

type CreateBackendAPIResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateBackendAPIResponse *shared.CreateBackendAPIResponse 
    GatewayTimeoutException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

