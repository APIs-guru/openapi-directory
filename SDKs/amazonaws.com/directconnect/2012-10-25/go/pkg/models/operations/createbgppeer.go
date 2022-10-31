package operations

import (
"openapi/pkg/models/shared")


type CreateBgpPeerXAmzTargetEnum string

const (
    CreateBgpPeerXAmzTargetEnumOvertureServiceCreateBgpPeer CreateBgpPeerXAmzTargetEnum = "OvertureService.CreateBGPPeer"
)


type CreateBgpPeerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateBgpPeerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateBgpPeerRequest struct {
    Headers CreateBgpPeerHeaders 
    Request shared.CreateBgpPeerRequest `request:"mediaType=application/json"`
    
}

type CreateBgpPeerResponse struct {
    ContentType string 
    CreateBgpPeerResponse *shared.CreateBgpPeerResponse 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

