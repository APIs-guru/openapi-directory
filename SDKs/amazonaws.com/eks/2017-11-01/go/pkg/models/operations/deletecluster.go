package operations

import (
"openapi/pkg/models/shared")

type DeleteClusterPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteClusterRequest struct {
    PathParams DeleteClusterPathParams 
    Headers DeleteClusterHeaders 
    
}

type DeleteClusterResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteClusterResponse *shared.DeleteClusterResponse 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

