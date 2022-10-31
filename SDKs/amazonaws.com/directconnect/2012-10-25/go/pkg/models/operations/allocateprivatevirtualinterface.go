package operations

import (
"openapi/pkg/models/shared")


type AllocatePrivateVirtualInterfaceXAmzTargetEnum string

const (
    AllocatePrivateVirtualInterfaceXAmzTargetEnumOvertureServiceAllocatePrivateVirtualInterface AllocatePrivateVirtualInterfaceXAmzTargetEnum = "OvertureService.AllocatePrivateVirtualInterface"
)


type AllocatePrivateVirtualInterfaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AllocatePrivateVirtualInterfaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AllocatePrivateVirtualInterfaceRequest struct {
    Headers AllocatePrivateVirtualInterfaceHeaders 
    Request shared.AllocatePrivateVirtualInterfaceRequest `request:"mediaType=application/json"`
    
}

type AllocatePrivateVirtualInterfaceResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    DuplicateTagKeysException *interface{} 
    StatusCode int64 
    TooManyTagsException *interface{} 
    VirtualInterface *shared.VirtualInterface 
    
}

