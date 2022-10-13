package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHostedConnectionsXAmzTargetEnum string

const (
	DescribeHostedConnectionsXAmzTargetEnumOvertureServiceDescribeHostedConnections DescribeHostedConnectionsXAmzTargetEnum = "OvertureService.DescribeHostedConnections"
)

type DescribeHostedConnectionsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHostedConnectionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHostedConnectionsRequest struct {
	Headers DescribeHostedConnectionsHeaders
	Request shared.DescribeHostedConnectionsRequest `request:"mediaType=application/json"`
}

type DescribeHostedConnectionsResponse struct {
	Connections                  *shared.Connections
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
