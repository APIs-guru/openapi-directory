package operations

import (
"openapi/pkg/models/shared")


type AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum string

const (
    AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceAcceptDirectConnectGatewayAssociationProposal AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
)


type AcceptDirectConnectGatewayAssociationProposalHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AcceptDirectConnectGatewayAssociationProposalRequest struct {
    Headers AcceptDirectConnectGatewayAssociationProposalHeaders 
    Request shared.AcceptDirectConnectGatewayAssociationProposalRequest `request:"mediaType=application/json"`
    
}

type AcceptDirectConnectGatewayAssociationProposalResponse struct {
    AcceptDirectConnectGatewayAssociationProposalResult *shared.AcceptDirectConnectGatewayAssociationProposalResult 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

