package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDirectConnectGatewayAssociationXAmzTargetEnum string

const (
	UpdateDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceUpdateDirectConnectGatewayAssociation UpdateDirectConnectGatewayAssociationXAmzTargetEnum = "OvertureService.UpdateDirectConnectGatewayAssociation"
)

type UpdateDirectConnectGatewayAssociationHeaders struct {
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDirectConnectGatewayAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDirectConnectGatewayAssociationRequest struct {
	Headers UpdateDirectConnectGatewayAssociationHeaders
	Request shared.UpdateDirectConnectGatewayAssociationRequest `request:"mediaType=application/json"`
}

type UpdateDirectConnectGatewayAssociationResponse struct {
	ContentType                                 string
	DirectConnectClientException                *interface{}
	DirectConnectServerException                *interface{}
	StatusCode                                  int64
	UpdateDirectConnectGatewayAssociationResult *shared.UpdateDirectConnectGatewayAssociationResult
}
