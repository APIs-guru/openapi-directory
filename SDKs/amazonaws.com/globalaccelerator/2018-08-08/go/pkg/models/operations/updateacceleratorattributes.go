package operations

import (
"openapi/pkg/models/shared")


type UpdateAcceleratorAttributesXAmzTargetEnum string

const (
    UpdateAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateAcceleratorAttributes UpdateAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
)


type UpdateAcceleratorAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAcceleratorAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAcceleratorAttributesRequest struct {
    Headers UpdateAcceleratorAttributesHeaders 
    Request shared.UpdateAcceleratorAttributesRequest `request:"mediaType=application/json"`
    
}

type UpdateAcceleratorAttributesResponse struct {
    AcceleratorNotFoundException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    UpdateAcceleratorAttributesResponse *shared.UpdateAcceleratorAttributesResponse 
    
}

