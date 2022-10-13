package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum string

const (
	CreateDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceCreateDirectConnectGatewayAssociationProposal CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum = "OvertureService.CreateDirectConnectGatewayAssociationProposal"
)

type CreateDirectConnectGatewayAssociationProposalHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDirectConnectGatewayAssociationProposalRequest struct {
	Headers CreateDirectConnectGatewayAssociationProposalHeaders
	Request shared.CreateDirectConnectGatewayAssociationProposalRequest `request:"mediaType=application/json"`
}

type CreateDirectConnectGatewayAssociationProposalResponse struct {
	ContentType                                         string
	CreateDirectConnectGatewayAssociationProposalResult *shared.CreateDirectConnectGatewayAssociationProposalResult
	DirectConnectClientException                        *interface{}
	DirectConnectServerException                        *interface{}
	StatusCode                                          int64
}
