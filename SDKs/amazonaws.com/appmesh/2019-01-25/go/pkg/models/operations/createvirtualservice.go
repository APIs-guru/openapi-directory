package operations

import (
"openapi/pkg/models/shared")

type CreateVirtualServicePathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    
}

type CreateVirtualServiceQueryParams struct {
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    
}

type CreateVirtualServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateVirtualServiceRequestBodySpec struct {
    Provider *shared.VirtualServiceProvider `json:"provider,omitempty"`
    
}

type CreateVirtualServiceRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Spec CreateVirtualServiceRequestBodySpec `json:"spec"`
    Tags []shared.TagRef `json:"tags,omitempty"`
    VirtualServiceName string `json:"virtualServiceName"`
    
}

type CreateVirtualServiceRequest struct {
    PathParams CreateVirtualServicePathParams 
    QueryParams CreateVirtualServiceQueryParams 
    Headers CreateVirtualServiceHeaders 
    Request CreateVirtualServiceRequestBody `request:"mediaType=application/json"`
    
}

type CreateVirtualServiceResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateVirtualServiceOutput *shared.CreateVirtualServiceOutput 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

