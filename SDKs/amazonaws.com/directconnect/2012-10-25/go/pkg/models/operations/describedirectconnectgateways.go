package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectConnectGatewaysXAmzTargetEnum string

const (
	DescribeDirectConnectGatewaysXAmzTargetEnumOvertureServiceDescribeDirectConnectGateways DescribeDirectConnectGatewaysXAmzTargetEnum = "OvertureService.DescribeDirectConnectGateways"
)

type DescribeDirectConnectGatewaysHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectConnectGatewaysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
