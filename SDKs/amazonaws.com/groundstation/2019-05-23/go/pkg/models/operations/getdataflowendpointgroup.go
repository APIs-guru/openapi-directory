package operations

import (
"openapi/pkg/models/shared")

type GetDataflowEndpointGroupPathParams struct {
    DataflowEndpointGroupID string `pathParam:"style=simple,explode=false,name=dataflowEndpointGroupId"`
    
}

type GetDataflowEndpointGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDataflowEndpointGroupRequest struct {
    PathParams GetDataflowEndpointGroupPathParams 
    Headers GetDataflowEndpointGroupHeaders 
    
}

type GetDataflowEndpointGroupResponse struct {
    ContentType string 
    DependencyException *interface{} 
    GetDataflowEndpointGroupResponse *shared.GetDataflowEndpointGroupResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

