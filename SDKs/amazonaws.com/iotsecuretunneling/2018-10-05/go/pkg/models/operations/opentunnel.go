package operations

import (
"openapi/pkg/models/shared")


type OpenTunnelXAmzTargetEnum string

const (
    OpenTunnelXAmzTargetEnumIoTSecuredTunnelingOpenTunnel OpenTunnelXAmzTargetEnum = "IoTSecuredTunneling.OpenTunnel"
)


type OpenTunnelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget OpenTunnelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type OpenTunnelRequest struct {
    Headers OpenTunnelHeaders 
    Request shared.OpenTunnelRequest `request:"mediaType=application/json"`
    
}

type OpenTunnelResponse struct {
    ContentType string 
    LimitExceededException *interface{} 
    OpenTunnelResponse *shared.OpenTunnelResponse 
    StatusCode int64 
    
}

