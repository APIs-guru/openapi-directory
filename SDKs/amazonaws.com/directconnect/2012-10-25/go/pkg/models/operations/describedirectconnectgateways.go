package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectConnectGatewaysXAmzTargetEnum string

const (
	DescribeDirectConnectGatewaysXAmzTargetEnumOvertureServiceDescribeDirectConnectGateways DescribeDirectConnectGatewaysXAmzTargetEnum = "OvertureService.DescribeDirectConnectGateways"
)

type DescribeDirectConnectGatewaysHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectConnectGatewaysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDirectConnectGatewaysRequest struct {
	Headers DescribeDirectConnectGatewaysHeaders
	Request shared.DescribeDirectConnectGatewaysRequest `request:"mediaType=application/json"`
}

type DescribeDirectConnectGatewaysResponse struct {
	ContentType                         string
	DescribeDirectConnectGatewaysResult *shared.DescribeDirectConnectGatewaysResult
	DirectConnectClientException        *interface{}
	DirectConnectServerException        *interface{}
	StatusCode                          int64
}
