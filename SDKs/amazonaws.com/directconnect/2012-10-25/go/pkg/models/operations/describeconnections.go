package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionsXAmzTargetEnum string

const (
	DescribeConnectionsXAmzTargetEnumOvertureServiceDescribeConnections DescribeConnectionsXAmzTargetEnum = "OvertureService.DescribeConnections"
)

type DescribeConnectionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionsRequest struct {
	Headers DescribeConnectionsHeaders
	Request shared.DescribeConnectionsRequest `request:"mediaType=application/json"`
}

type DescribeConnectionsResponse struct {
	Connections                  *shared.Connections
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
