package operations

import (
"openapi/pkg/models/shared")

type DeleteVirtualRouterPathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
    
}

type DeleteVirtualRouterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteVirtualRouterRequest struct {
    PathParams DeleteVirtualRouterPathParams 
    Headers DeleteVirtualRouterHeaders 
    
}

type DeleteVirtualRouterResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteVirtualRouterOutput *shared.DeleteVirtualRouterOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ResourceInUseException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

