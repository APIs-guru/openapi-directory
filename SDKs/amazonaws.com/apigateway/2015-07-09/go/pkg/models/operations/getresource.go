package operations

import (
"openapi/pkg/models/shared")

type GetResourcePathParams struct {
    ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type GetResourceQueryParams struct {
    Embed []string `queryParam:"style=form,explode=true,name=embed"`
    
}

type GetResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResourceRequest struct {
    PathParams GetResourcePathParams 
    QueryParams GetResourceQueryParams 
    Headers GetResourceHeaders 
    
}

type GetResourceResponse struct {
    ContentType string 
    NotFoundException *interface{} 
    Resource *shared.Resource 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

