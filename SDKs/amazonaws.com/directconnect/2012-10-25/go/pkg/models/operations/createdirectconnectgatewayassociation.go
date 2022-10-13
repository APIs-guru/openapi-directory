package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectConnectGatewayAssociationXAmzTargetEnum string

const (
	CreateDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceCreateDirectConnectGatewayAssociation CreateDirectConnectGatewayAssociationXAmzTargetEnum = "OvertureService.CreateDirectConnectGatewayAssociation"
)

type CreateDirectConnectGatewayAssociationHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDirectConnectGatewayAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDirectConnectGatewayAssociationRequest struct {
	Headers CreateDirectConnectGatewayAssociationHeaders
	Request shared.CreateDirectConnectGatewayAssociationRequest `request:"mediaType=application/json"`
}

type CreateDirectConnectGatewayAssociationResponse struct {
	ContentType                                 string
	CreateDirectConnectGatewayAssociationResult *shared.CreateDirectConnectGatewayAssociationResult
	DirectConnectClientException                *interface{}
	DirectConnectServerException                *interface{}
	StatusCode                                  int64
}
