package operations

import (
"openapi/pkg/models/shared")

type DeleteIntegrationPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type DeleteIntegrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteIntegrationRequestBody struct {
    URI string `json:"Uri"`
    
}

type DeleteIntegrationRequest struct {
    PathParams DeleteIntegrationPathParams 
    Headers DeleteIntegrationHeaders 
    Request DeleteIntegrationRequestBody `request:"mediaType=application/json"`
    
}

type DeleteIntegrationResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    DeleteIntegrationResponse *shared.DeleteIntegrationResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

