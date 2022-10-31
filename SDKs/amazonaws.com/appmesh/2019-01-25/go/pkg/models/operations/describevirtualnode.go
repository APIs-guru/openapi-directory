package operations

import (
"openapi/pkg/models/shared")

type DescribeVirtualNodePathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    VirtualNodeName string `pathParam:"style=simple,explode=false,name=virtualNodeName"`
    
}

type DescribeVirtualNodeQueryParams struct {
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    
}

type DescribeVirtualNodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeVirtualNodeRequest struct {
    PathParams DescribeVirtualNodePathParams 
    QueryParams DescribeVirtualNodeQueryParams 
    Headers DescribeVirtualNodeHeaders 
    
}

type DescribeVirtualNodeResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DescribeVirtualNodeOutput *shared.DescribeVirtualNodeOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

