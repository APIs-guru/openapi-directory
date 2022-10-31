package operations

import (
"openapi/pkg/models/shared")

type DeletePortalPathParams struct {
    PortalID string `pathParam:"style=simple,explode=false,name=portalId"`
    
}

type DeletePortalQueryParams struct {
    ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
    
}

type DeletePortalHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeletePortalRequest struct {
    PathParams DeletePortalPathParams 
    QueryParams DeletePortalQueryParams 
    Headers DeletePortalHeaders 
    
}

type DeletePortalResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    DeletePortalResponse *shared.DeletePortalResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

