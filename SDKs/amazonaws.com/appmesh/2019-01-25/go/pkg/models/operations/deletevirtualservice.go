package operations

import (
"openapi/pkg/models/shared")

type DeleteVirtualServicePathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    VirtualServiceName string `pathParam:"style=simple,explode=false,name=virtualServiceName"`
    
}

type DeleteVirtualServiceQueryParams struct {
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    
}

type DeleteVirtualServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteVirtualServiceRequest struct {
    PathParams DeleteVirtualServicePathParams 
    QueryParams DeleteVirtualServiceQueryParams 
    Headers DeleteVirtualServiceHeaders 
    
}

type DeleteVirtualServiceResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteVirtualServiceOutput *shared.DeleteVirtualServiceOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ResourceInUseException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

