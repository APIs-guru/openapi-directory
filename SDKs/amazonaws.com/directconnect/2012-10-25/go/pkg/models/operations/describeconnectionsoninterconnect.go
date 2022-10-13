package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionsOnInterconnectXAmzTargetEnum string

const (
	DescribeConnectionsOnInterconnectXAmzTargetEnumOvertureServiceDescribeConnectionsOnInterconnect DescribeConnectionsOnInterconnectXAmzTargetEnum = "OvertureService.DescribeConnectionsOnInterconnect"
)

type DescribeConnectionsOnInterconnectHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionsOnInterconnectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionsOnInterconnectRequest struct {
	Headers DescribeConnectionsOnInterconnectHeaders
	Request shared.DescribeConnectionsOnInterconnectRequest `request:"mediaType=application/json"`
}

type DescribeConnectionsOnInterconnectResponse struct {
	Connections                  *shared.Connections
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
