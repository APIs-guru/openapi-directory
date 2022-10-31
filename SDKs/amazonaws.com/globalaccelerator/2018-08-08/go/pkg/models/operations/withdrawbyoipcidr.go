package operations

import (
"openapi/pkg/models/shared")


type WithdrawByoipCidrXAmzTargetEnum string

const (
    WithdrawByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706WithdrawByoipCidr WithdrawByoipCidrXAmzTargetEnum = "GlobalAccelerator_V20180706.WithdrawByoipCidr"
)


type WithdrawByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget WithdrawByoipCidrXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type WithdrawByoipCidrRequest struct {
    Headers WithdrawByoipCidrHeaders 
    Request shared.WithdrawByoipCidrRequest `request:"mediaType=application/json"`
    
}

type WithdrawByoipCidrResponse struct {
    AccessDeniedException *interface{} 
    ByoipCidrNotFoundException *interface{} 
    ContentType string 
    IncorrectCidrStateException *interface{} 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    WithdrawByoipCidrResponse *shared.WithdrawByoipCidrResponse 
    
}

