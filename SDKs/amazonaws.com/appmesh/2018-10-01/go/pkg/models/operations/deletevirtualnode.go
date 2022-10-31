package operations

import (
"openapi/pkg/models/shared")

type DeleteVirtualNodePathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
    
}

type DeleteVirtualNodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteVirtualNodeRequest struct {
    PathParams DeleteVirtualNodePathParams 
    Headers DeleteVirtualNodeHeaders 
    
}

type DeleteVirtualNodeResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteVirtualNodeOutput *shared.DeleteVirtualNodeOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ResourceInUseException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

