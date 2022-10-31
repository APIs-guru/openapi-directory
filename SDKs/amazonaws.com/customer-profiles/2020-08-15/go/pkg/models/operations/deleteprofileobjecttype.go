package operations

import (
"openapi/pkg/models/shared")

type DeleteProfileObjectTypePathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    ObjectTypeName string `pathParam:"style=simple,explode=false,name=ObjectTypeName"`
    
}

type DeleteProfileObjectTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteProfileObjectTypeRequest struct {
    PathParams DeleteProfileObjectTypePathParams 
    Headers DeleteProfileObjectTypeHeaders 
    
}

type DeleteProfileObjectTypeResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    DeleteProfileObjectTypeResponse *shared.DeleteProfileObjectTypeResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

