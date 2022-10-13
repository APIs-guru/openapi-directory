package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum string

const (
	DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociationProposal DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"
)

type DeleteDirectConnectGatewayAssociationProposalHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDirectConnectGatewayAssociationProposalRequest struct {
	Headers DeleteDirectConnectGatewayAssociationProposalHeaders
	Request shared.DeleteDirectConnectGatewayAssociationProposalRequest `request:"mediaType=application/json"`
}

type DeleteDirectConnectGatewayAssociationProposalResponse struct {
	ContentType                                         string
	DeleteDirectConnectGatewayAssociationProposalResult *shared.DeleteDirectConnectGatewayAssociationProposalResult
	DirectConnectClientException                        *interface{}
	DirectConnectServerException                        *interface{}
	StatusCode                                          int64
}
