package operations

import (
"openapi/pkg/models/shared")

type DeregisterClusterPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeregisterClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeregisterClusterRequest struct {
    PathParams DeregisterClusterPathParams 
    Headers DeregisterClusterHeaders 
    
}

type DeregisterClusterResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeregisterClusterResponse *shared.DeregisterClusterResponse 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

