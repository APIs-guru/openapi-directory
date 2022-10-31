package operations

import (
"openapi/pkg/models/shared")


type AdvertiseByoipCidrXAmzTargetEnum string

const (
    AdvertiseByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706AdvertiseByoipCidr AdvertiseByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
)


type AdvertiseByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdvertiseByoipCidrXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdvertiseByoipCidrRequest struct {
    Headers AdvertiseByoipCidrHeaders 
    Request shared.AdvertiseByoipCidrRequest `request:"mediaType=application/json"`
    
}

type AdvertiseByoipCidrResponse struct {
    AccessDeniedException *interface{} 
    AdvertiseByoipCidrResponse *shared.AdvertiseByoipCidrResponse 
    ByoipCidrNotFoundException *interface{} 
    ContentType string 
    IncorrectCidrStateException *interface{} 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

