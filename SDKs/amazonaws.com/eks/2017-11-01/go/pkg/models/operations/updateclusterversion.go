package operations

import (
"openapi/pkg/models/shared")

type UpdateClusterVersionPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type UpdateClusterVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateClusterVersionRequestBody struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    Version string `json:"version"`
    
}

type UpdateClusterVersionRequest struct {
    PathParams UpdateClusterVersionPathParams 
    Headers UpdateClusterVersionHeaders 
    Request UpdateClusterVersionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateClusterVersionResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UpdateClusterVersionResponse *shared.UpdateClusterVersionResponse 
    
}

