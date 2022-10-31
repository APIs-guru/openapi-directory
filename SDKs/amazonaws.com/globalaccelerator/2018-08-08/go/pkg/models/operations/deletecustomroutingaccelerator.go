package operations

import (
"openapi/pkg/models/shared")


type DeleteCustomRoutingAcceleratorXAmzTargetEnum string

const (
    DeleteCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator DeleteCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator"
)


type DeleteCustomRoutingAcceleratorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCustomRoutingAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCustomRoutingAcceleratorRequest struct {
    Headers DeleteCustomRoutingAcceleratorHeaders 
    Request shared.DeleteCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
    
}

type DeleteCustomRoutingAcceleratorResponse struct {
    AcceleratorNotDisabledException *interface{} 
    AcceleratorNotFoundException *interface{} 
    AssociatedListenerFoundException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

