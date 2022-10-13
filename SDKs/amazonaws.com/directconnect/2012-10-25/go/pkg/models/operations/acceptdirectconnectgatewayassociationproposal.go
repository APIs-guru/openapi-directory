package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum string

const (
	AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceAcceptDirectConnectGatewayAssociationProposal AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
)

type AcceptDirectConnectGatewayAssociationProposalHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptDirectConnectGatewayAssociationProposalRequest struct {
	Headers AcceptDirectConnectGatewayAssociationProposalHeaders
	Request shared.AcceptDirectConnectGatewayAssociationProposalRequest `request:"mediaType=application/json"`
}

type AcceptDirectConnectGatewayAssociationProposalResponse struct {
	AcceptDirectConnectGatewayAssociationProposalResult *shared.AcceptDirectConnectGatewayAssociationProposalResult
	ContentType                                         string
	DirectConnectClientException                        *interface{}
	DirectConnectServerException                        *interface{}
	StatusCode                                          int64
}
