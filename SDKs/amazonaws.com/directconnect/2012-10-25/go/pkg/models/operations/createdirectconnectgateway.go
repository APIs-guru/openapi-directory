package operations

import (
"openapi/pkg/models/shared")


type CreateDirectConnectGatewayXAmzTargetEnum string

const (
    CreateDirectConnectGatewayXAmzTargetEnumOvertureServiceCreateDirectConnectGateway CreateDirectConnectGatewayXAmzTargetEnum = "OvertureService.CreateDirectConnectGateway"
)


type CreateDirectConnectGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDirectConnectGatewayXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDirectConnectGatewayRequest struct {
    Headers CreateDirectConnectGatewayHeaders 
    Request shared.CreateDirectConnectGatewayRequest `request:"mediaType=application/json"`
    
}

type CreateDirectConnectGatewayResponse struct {
    ContentType string 
    CreateDirectConnectGatewayResult *shared.CreateDirectConnectGatewayResult 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

