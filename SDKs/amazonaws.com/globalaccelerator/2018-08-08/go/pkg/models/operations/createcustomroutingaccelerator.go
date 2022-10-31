package operations

import (
"openapi/pkg/models/shared")


type CreateCustomRoutingAcceleratorXAmzTargetEnum string

const (
    CreateCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingAccelerator CreateCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"
)


type CreateCustomRoutingAcceleratorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateCustomRoutingAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateCustomRoutingAcceleratorRequest struct {
    Headers CreateCustomRoutingAcceleratorHeaders 
    Request shared.CreateCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
    
}

type CreateCustomRoutingAcceleratorResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateCustomRoutingAcceleratorResponse *shared.CreateCustomRoutingAcceleratorResponse 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

