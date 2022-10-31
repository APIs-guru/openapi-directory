package operations

import (
"openapi/pkg/models/shared")


type UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum string

const (
    UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
)


type UpdateCustomRoutingAcceleratorAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateCustomRoutingAcceleratorAttributesRequest struct {
    Headers UpdateCustomRoutingAcceleratorAttributesHeaders 
    Request shared.UpdateCustomRoutingAcceleratorAttributesRequest `request:"mediaType=application/json"`
    
}

type UpdateCustomRoutingAcceleratorAttributesResponse struct {
    AcceleratorNotFoundException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    UpdateCustomRoutingAcceleratorAttributesResponse *shared.UpdateCustomRoutingAcceleratorAttributesResponse 
    
}

