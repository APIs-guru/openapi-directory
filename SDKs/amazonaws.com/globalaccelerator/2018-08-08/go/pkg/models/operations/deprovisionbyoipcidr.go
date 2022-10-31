package operations

import (
"openapi/pkg/models/shared")


type DeprovisionByoipCidrXAmzTargetEnum string

const (
    DeprovisionByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706DeprovisionByoipCidr DeprovisionByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.DeprovisionByoipCidr"
)


type DeprovisionByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeprovisionByoipCidrXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeprovisionByoipCidrRequest struct {
    Headers DeprovisionByoipCidrHeaders 
    Request shared.DeprovisionByoipCidrRequest `request:"mediaType=application/json"`
    
}

type DeprovisionByoipCidrResponse struct {
    AccessDeniedException *interface{} 
    ByoipCidrNotFoundException *interface{} 
    ContentType string 
    DeprovisionByoipCidrResponse *shared.DeprovisionByoipCidrResponse 
    IncorrectCidrStateException *interface{} 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

