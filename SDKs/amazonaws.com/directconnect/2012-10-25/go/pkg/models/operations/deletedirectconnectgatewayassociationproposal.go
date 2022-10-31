package operations

import (
"openapi/pkg/models/shared")


type DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum string

const (
    DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociationProposal DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"
)


type DeleteDirectConnectGatewayAssociationProposalHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDirectConnectGatewayAssociationProposalRequest struct {
    Headers DeleteDirectConnectGatewayAssociationProposalHeaders 
    Request shared.DeleteDirectConnectGatewayAssociationProposalRequest `request:"mediaType=application/json"`
    
}

type DeleteDirectConnectGatewayAssociationProposalResponse struct {
    ContentType string 
    DeleteDirectConnectGatewayAssociationProposalResult *shared.DeleteDirectConnectGatewayAssociationProposalResult 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

