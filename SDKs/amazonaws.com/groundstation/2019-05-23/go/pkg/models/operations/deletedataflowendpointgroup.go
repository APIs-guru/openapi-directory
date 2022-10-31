package operations

import (
"openapi/pkg/models/shared")

type DeleteDataflowEndpointGroupPathParams struct {
    DataflowEndpointGroupID string `pathParam:"style=simple,explode=false,name=dataflowEndpointGroupId"`
    
}

type DeleteDataflowEndpointGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDataflowEndpointGroupRequest struct {
    PathParams DeleteDataflowEndpointGroupPathParams 
    Headers DeleteDataflowEndpointGroupHeaders 
    
}

type DeleteDataflowEndpointGroupResponse struct {
    ContentType string 
    DataflowEndpointGroupIDResponse *shared.DataflowEndpointGroupIDResponse 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

