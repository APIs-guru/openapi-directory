package operations

import (
"openapi/pkg/models/shared")


type DeleteDirectConnectGatewayXAmzTargetEnum string

const (
    DeleteDirectConnectGatewayXAmzTargetEnumOvertureServiceDeleteDirectConnectGateway DeleteDirectConnectGatewayXAmzTargetEnum = "OvertureService.DeleteDirectConnectGateway"
)


type DeleteDirectConnectGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDirectConnectGatewayXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDirectConnectGatewayRequest struct {
    Headers DeleteDirectConnectGatewayHeaders 
    Request shared.DeleteDirectConnectGatewayRequest `request:"mediaType=application/json"`
    
}

type DeleteDirectConnectGatewayResponse struct {
    ContentType string 
    DeleteDirectConnectGatewayResult *shared.DeleteDirectConnectGatewayResult 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

