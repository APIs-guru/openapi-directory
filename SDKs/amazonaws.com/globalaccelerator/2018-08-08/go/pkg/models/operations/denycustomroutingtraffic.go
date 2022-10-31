package operations

import (
"openapi/pkg/models/shared")


type DenyCustomRoutingTrafficXAmzTargetEnum string

const (
    DenyCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706DenyCustomRoutingTraffic DenyCustomRoutingTrafficXAmzTargetEnum = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic"
)


type DenyCustomRoutingTrafficHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DenyCustomRoutingTrafficXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DenyCustomRoutingTrafficRequest struct {
    Headers DenyCustomRoutingTrafficHeaders 
    Request shared.DenyCustomRoutingTrafficRequest `request:"mediaType=application/json"`
    
}

type DenyCustomRoutingTrafficResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

