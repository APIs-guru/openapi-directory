package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectConnectGatewayXAmzTargetEnum string

const (
	CreateDirectConnectGatewayXAmzTargetEnumOvertureServiceCreateDirectConnectGateway CreateDirectConnectGatewayXAmzTargetEnum = "OvertureService.CreateDirectConnectGateway"
)

type CreateDirectConnectGatewayHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDirectConnectGatewayXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDirectConnectGatewayRequest struct {
	Headers CreateDirectConnectGatewayHeaders
	Request shared.CreateDirectConnectGatewayRequest `request:"mediaType=application/json"`
}

type CreateDirectConnectGatewayResponse struct {
	ContentType                      string
	CreateDirectConnectGatewayResult *shared.CreateDirectConnectGatewayResult
	DirectConnectClientException     *interface{}
	DirectConnectServerException     *interface{}
	StatusCode                       int64
}
