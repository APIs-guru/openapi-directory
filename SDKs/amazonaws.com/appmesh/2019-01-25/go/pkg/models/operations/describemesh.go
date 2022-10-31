package operations

import (
"openapi/pkg/models/shared")

type DescribeMeshPathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    
}

type DescribeMeshQueryParams struct {
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    
}

type DescribeMeshHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeMeshRequest struct {
    PathParams DescribeMeshPathParams 
    QueryParams DescribeMeshQueryParams 
    Headers DescribeMeshHeaders 
    
}

type DescribeMeshResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DescribeMeshOutput *shared.DescribeMeshOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

