package operations

import (
"openapi/pkg/models/shared")

type DeleteManagedEndpointPathParams struct {
    EndpointID string `pathParam:"style=simple,explode=false,name=endpointId"`
    VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
    
}

type DeleteManagedEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteManagedEndpointRequest struct {
    PathParams DeleteManagedEndpointPathParams 
    Headers DeleteManagedEndpointHeaders 
    
}

type DeleteManagedEndpointResponse struct {
    ContentType string 
    DeleteManagedEndpointResponse *shared.DeleteManagedEndpointResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

