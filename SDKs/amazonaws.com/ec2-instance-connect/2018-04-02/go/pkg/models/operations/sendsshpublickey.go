package operations

import (
"openapi/pkg/models/shared")


type SendSSHPublicKeyXAmzTargetEnum string

const (
    SendSSHPublicKeyXAmzTargetEnumAwsec2InstanceConnectServiceSendSSHPublicKey SendSSHPublicKeyXAmzTargetEnum = "AWSEC2InstanceConnectService.SendSSHPublicKey"
)


type SendSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SendSSHPublicKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SendSSHPublicKeyRequest struct {
    Headers SendSSHPublicKeyHeaders 
    Request shared.SendSSHPublicKeyRequest `request:"mediaType=application/json"`
    
}

type SendSSHPublicKeyResponse struct {
    AuthException *interface{} 
    ContentType string 
    Ec2InstanceNotFoundException *interface{} 
    InvalidArgsException *interface{} 
    SendSSHPublicKeyResponse *shared.SendSSHPublicKeyResponse 
    ServiceException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

