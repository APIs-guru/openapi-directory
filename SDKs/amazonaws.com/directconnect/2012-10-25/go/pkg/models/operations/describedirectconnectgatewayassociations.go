package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectConnectGatewayAssociationsXAmzTargetEnum string

const (
	DescribeDirectConnectGatewayAssociationsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAssociations DescribeDirectConnectGatewayAssociationsXAmzTargetEnum = "OvertureService.DescribeDirectConnectGatewayAssociations"
)

type DescribeDirectConnectGatewayAssociationsHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectConnectGatewayAssociationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDirectConnectGatewayAssociationsRequest struct {
	Headers DescribeDirectConnectGatewayAssociationsHeaders
	Request shared.DescribeDirectConnectGatewayAssociationsRequest `request:"mediaType=application/json"`
}

type DescribeDirectConnectGatewayAssociationsResponse struct {
	ContentType                                    string
	DescribeDirectConnectGatewayAssociationsResult *shared.DescribeDirectConnectGatewayAssociationsResult
	DirectConnectClientException                   *interface{}
	DirectConnectServerException                   *interface{}
	StatusCode                                     int64
}
