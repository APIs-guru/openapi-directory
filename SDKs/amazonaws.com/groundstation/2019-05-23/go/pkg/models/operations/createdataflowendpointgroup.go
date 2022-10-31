package operations

import (
"openapi/pkg/models/shared")

type CreateDataflowEndpointGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDataflowEndpointGroupRequestBody struct {
    EndpointDetails []shared.EndpointDetails `json:"endpointDetails"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateDataflowEndpointGroupRequest struct {
    Headers CreateDataflowEndpointGroupHeaders 
    Request CreateDataflowEndpointGroupRequestBody `request:"mediaType=application/json"`
    
}

type CreateDataflowEndpointGroupResponse struct {
    ContentType string 
    DataflowEndpointGroupIDResponse *shared.DataflowEndpointGroupIDResponse 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

