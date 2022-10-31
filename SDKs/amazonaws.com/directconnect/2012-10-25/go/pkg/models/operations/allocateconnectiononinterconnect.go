package operations

import (
"openapi/pkg/models/shared")


type AllocateConnectionOnInterconnectXAmzTargetEnum string

const (
    AllocateConnectionOnInterconnectXAmzTargetEnumOvertureServiceAllocateConnectionOnInterconnect AllocateConnectionOnInterconnectXAmzTargetEnum = "OvertureService.AllocateConnectionOnInterconnect"
)


type AllocateConnectionOnInterconnectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AllocateConnectionOnInterconnectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AllocateConnectionOnInterconnectRequest struct {
    Headers AllocateConnectionOnInterconnectHeaders 
    Request shared.AllocateConnectionOnInterconnectRequest `request:"mediaType=application/json"`
    
}

type AllocateConnectionOnInterconnectResponse struct {
    Connection *shared.Connection 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

