package operations

import (
"openapi/pkg/models/shared")


type UpdateCustomRoutingListenerXAmzTargetEnum string

const (
    UpdateCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingListener UpdateCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener"
)


type UpdateCustomRoutingListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateCustomRoutingListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateCustomRoutingListenerRequest struct {
    Headers UpdateCustomRoutingListenerHeaders 
    Request shared.UpdateCustomRoutingListenerRequest `request:"mediaType=application/json"`
    
}

type UpdateCustomRoutingListenerResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    InvalidPortRangeException *interface{} 
    LimitExceededException *interface{} 
    ListenerNotFoundException *interface{} 
    StatusCode int64 
    UpdateCustomRoutingListenerResponse *shared.UpdateCustomRoutingListenerResponse 
    
}

