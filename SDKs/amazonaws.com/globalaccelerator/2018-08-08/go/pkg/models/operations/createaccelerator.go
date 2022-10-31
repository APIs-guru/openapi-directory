package operations

import (
"openapi/pkg/models/shared")


type CreateAcceleratorXAmzTargetEnum string

const (
    CreateAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706CreateAccelerator CreateAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateAccelerator"
)


type CreateAcceleratorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAcceleratorRequest struct {
    Headers CreateAcceleratorHeaders 
    Request shared.CreateAcceleratorRequest `request:"mediaType=application/json"`
    
}

type CreateAcceleratorResponse struct {
    ContentType string 
    CreateAcceleratorResponse *shared.CreateAcceleratorResponse 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

