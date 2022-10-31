package operations

import (
"openapi/pkg/models/shared")


type UpdateListenerXAmzTargetEnum string

const (
    UpdateListenerXAmzTargetEnumGlobalAcceleratorV20180706UpdateListener UpdateListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateListener"
)


type UpdateListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateListenerRequest struct {
    Headers UpdateListenerHeaders 
    Request shared.UpdateListenerRequest `request:"mediaType=application/json"`
    
}

type UpdateListenerResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    InvalidPortRangeException *interface{} 
    LimitExceededException *interface{} 
    ListenerNotFoundException *interface{} 
    StatusCode int64 
    UpdateListenerResponse *shared.UpdateListenerResponse 
    
}

