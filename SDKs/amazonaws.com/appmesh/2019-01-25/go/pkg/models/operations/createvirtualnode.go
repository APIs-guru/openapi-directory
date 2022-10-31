package operations

import (
"openapi/pkg/models/shared")

type CreateVirtualNodePathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    
}

type CreateVirtualNodeQueryParams struct {
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    
}

type CreateVirtualNodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateVirtualNodeRequestBodySpec struct {
    BackendDefaults *shared.BackendDefaults `json:"backendDefaults,omitempty"`
    Backends []shared.Backend `json:"backends,omitempty"`
    Listeners []shared.Listener `json:"listeners,omitempty"`
    Logging *shared.Logging `json:"logging,omitempty"`
    ServiceDiscovery *shared.ServiceDiscovery `json:"serviceDiscovery,omitempty"`
    
}

type CreateVirtualNodeRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Spec CreateVirtualNodeRequestBodySpec `json:"spec"`
    Tags []shared.TagRef `json:"tags,omitempty"`
    VirtualNodeName string `json:"virtualNodeName"`
    
}

type CreateVirtualNodeRequest struct {
    PathParams CreateVirtualNodePathParams 
    QueryParams CreateVirtualNodeQueryParams 
    Headers CreateVirtualNodeHeaders 
    Request CreateVirtualNodeRequestBody `request:"mediaType=application/json"`
    
}

type CreateVirtualNodeResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateVirtualNodeOutput *shared.CreateVirtualNodeOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

