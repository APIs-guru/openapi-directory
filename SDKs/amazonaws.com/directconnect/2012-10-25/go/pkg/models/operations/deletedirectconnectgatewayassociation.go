package operations

import (
"openapi/pkg/models/shared")


type DeleteDirectConnectGatewayAssociationXAmzTargetEnum string

const (
    DeleteDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociation DeleteDirectConnectGatewayAssociationXAmzTargetEnum = "OvertureService.DeleteDirectConnectGatewayAssociation"
)


type DeleteDirectConnectGatewayAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDirectConnectGatewayAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDirectConnectGatewayAssociationRequest struct {
    Headers DeleteDirectConnectGatewayAssociationHeaders 
    Request shared.DeleteDirectConnectGatewayAssociationRequest `request:"mediaType=application/json"`
    
}

type DeleteDirectConnectGatewayAssociationResponse struct {
    ContentType string 
    DeleteDirectConnectGatewayAssociationResult *shared.DeleteDirectConnectGatewayAssociationResult 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

