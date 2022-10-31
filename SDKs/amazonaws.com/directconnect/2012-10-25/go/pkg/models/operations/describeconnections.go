package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionsXAmzTargetEnum string

const (
	DescribeConnectionsXAmzTargetEnumOvertureServiceDescribeConnections DescribeConnectionsXAmzTargetEnum = "OvertureService.DescribeConnections"
)

type DescribeConnectionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
