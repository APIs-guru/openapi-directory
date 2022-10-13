package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectConnectGatewayAssociationXAmzTargetEnum string

const (
	DeleteDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociation DeleteDirectConnectGatewayAssociationXAmzTargetEnum = "OvertureService.DeleteDirectConnectGatewayAssociation"
)

type DeleteDirectConnectGatewayAssociationHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDirectConnectGatewayAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDirectConnectGatewayAssociationRequest struct {
	Headers DeleteDirectConnectGatewayAssociationHeaders
	Request shared.DeleteDirectConnectGatewayAssociationRequest `request:"mediaType=application/json"`
}

type DeleteDirectConnectGatewayAssociationResponse struct {
	ContentType                                 string
	DeleteDirectConnectGatewayAssociationResult *shared.DeleteDirectConnectGatewayAssociationResult
	DirectConnectClientException                *interface{}
	DirectConnectServerException                *interface{}
	StatusCode                                  int64
}
