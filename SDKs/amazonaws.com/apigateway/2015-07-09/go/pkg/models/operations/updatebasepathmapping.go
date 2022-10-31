package operations

import (
"openapi/pkg/models/shared")

type UpdateBasePathMappingPathParams struct {
    BasePath string `pathParam:"style=simple,explode=false,name=base_path"`
    DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
    
}

type UpdateBasePathMappingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateBasePathMappingRequestBody struct {
    PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
    
}

type UpdateBasePathMappingRequest struct {
    PathParams UpdateBasePathMappingPathParams 
    Headers UpdateBasePathMappingHeaders 
    Request UpdateBasePathMappingRequestBody `request:"mediaType=application/json"`
    
}

type UpdateBasePathMappingResponse struct {
    BadRequestException *interface{} 
    BasePathMapping *shared.BasePathMapping 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

