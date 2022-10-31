package operations

import (
"openapi/pkg/models/shared")

type UpdateVirtualRouterPathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    VirtualRouterName string `pathParam:"style=simple,explode=false,name=virtualRouterName"`
    
}

type UpdateVirtualRouterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateVirtualRouterRequestBodySpec struct {
    ServiceNames []string `json:"serviceNames,omitempty"`
    
}

type UpdateVirtualRouterRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Spec UpdateVirtualRouterRequestBodySpec `json:"spec"`
    
}

type UpdateVirtualRouterRequest struct {
    PathParams UpdateVirtualRouterPathParams 
    Headers UpdateVirtualRouterHeaders 
    Request UpdateVirtualRouterRequestBody `request:"mediaType=application/json"`
    
}

type UpdateVirtualRouterResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateVirtualRouterOutput *shared.UpdateVirtualRouterOutput 
    
}

