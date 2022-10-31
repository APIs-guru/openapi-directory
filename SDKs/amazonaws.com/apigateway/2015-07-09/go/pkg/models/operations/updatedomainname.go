package operations

import (
"openapi/pkg/models/shared")

type UpdateDomainNamePathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
    
}

type UpdateDomainNameHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDomainNameRequestBody struct {
    PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
    
}

type UpdateDomainNameRequest struct {
    PathParams UpdateDomainNamePathParams 
    Headers UpdateDomainNameHeaders 
    Request UpdateDomainNameRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDomainNameResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DomainName *shared.DomainName 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

