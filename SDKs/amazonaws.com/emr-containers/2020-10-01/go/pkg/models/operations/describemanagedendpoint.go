package operations

import (
"openapi/pkg/models/shared")

type DescribeManagedEndpointPathParams struct {
    EndpointID string `pathParam:"style=simple,explode=false,name=endpointId"`
    VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
    
}

type DescribeManagedEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeManagedEndpointRequest struct {
    PathParams DescribeManagedEndpointPathParams 
    Headers DescribeManagedEndpointHeaders 
    
}

type DescribeManagedEndpointResponse struct {
    ContentType string 
    DescribeManagedEndpointResponse *shared.DescribeManagedEndpointResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

