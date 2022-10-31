package operations

import (
"openapi/pkg/models/shared")


type ConfirmPrivateVirtualInterfaceXAmzTargetEnum string

const (
    ConfirmPrivateVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmPrivateVirtualInterface ConfirmPrivateVirtualInterfaceXAmzTargetEnum = "OvertureService.ConfirmPrivateVirtualInterface"
)


type ConfirmPrivateVirtualInterfaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ConfirmPrivateVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ConfirmPrivateVirtualInterfaceRequest struct {
    Headers ConfirmPrivateVirtualInterfaceHeaders 
    Request shared.ConfirmPrivateVirtualInterfaceRequest `request:"mediaType=application/json"`
    
}

type ConfirmPrivateVirtualInterfaceResponse struct {
    ConfirmPrivateVirtualInterfaceResponse *shared.ConfirmPrivateVirtualInterfaceResponse 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

