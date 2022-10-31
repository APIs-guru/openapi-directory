package operations

import (
"openapi/pkg/models/shared")

type DescribeVirtualClusterPathParams struct {
    VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
    
}

type DescribeVirtualClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeVirtualClusterRequest struct {
    PathParams DescribeVirtualClusterPathParams 
    Headers DescribeVirtualClusterHeaders 
    
}

type DescribeVirtualClusterResponse struct {
    ContentType string 
    DescribeVirtualClusterResponse *shared.DescribeVirtualClusterResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

