package operations

import (
"openapi/pkg/models/shared")

type DeleteProfileKeyPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type DeleteProfileKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteProfileKeyRequestBody struct {
    KeyName string `json:"KeyName"`
    ProfileID string `json:"ProfileId"`
    Values []string `json:"Values"`
    
}

type DeleteProfileKeyRequest struct {
    PathParams DeleteProfileKeyPathParams 
    Headers DeleteProfileKeyHeaders 
    Request DeleteProfileKeyRequestBody `request:"mediaType=application/json"`
    
}

type DeleteProfileKeyResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    DeleteProfileKeyResponse *shared.DeleteProfileKeyResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

