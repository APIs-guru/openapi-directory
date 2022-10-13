package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum string

const (
	DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAssociationProposals DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"
)

type DescribeDirectConnectGatewayAssociationProposalsHeaders struct {
	XAmzAlgorithm     *string                                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDirectConnectGatewayAssociationProposalsRequest struct {
	Headers DescribeDirectConnectGatewayAssociationProposalsHeaders
	Request shared.DescribeDirectConnectGatewayAssociationProposalsRequest `request:"mediaType=application/json"`
}

type DescribeDirectConnectGatewayAssociationProposalsResponse struct {
	ContentType                                            string
	DescribeDirectConnectGatewayAssociationProposalsResult *shared.DescribeDirectConnectGatewayAssociationProposalsResult
	DirectConnectClientException                           *interface{}
	DirectConnectServerException                           *interface{}
	StatusCode                                             int64
}
