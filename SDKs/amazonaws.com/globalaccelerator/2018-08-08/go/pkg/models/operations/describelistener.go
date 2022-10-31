package operations

import (
"openapi/pkg/models/shared")


type DescribeListenerXAmzTargetEnum string

const (
    DescribeListenerXAmzTargetEnumGlobalAcceleratorV20180706DescribeListener DescribeListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeListener"
)


type DescribeListenerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeListenerRequest struct {
    Headers DescribeListenerHeaders 
    Request shared.DescribeListenerRequest `request:"mediaType=application/json"`
    
}

type DescribeListenerResponse struct {
    ContentType string 
    DescribeListenerResponse *shared.DescribeListenerResponse 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    ListenerNotFoundException *interface{} 
    StatusCode int64 
    
}

