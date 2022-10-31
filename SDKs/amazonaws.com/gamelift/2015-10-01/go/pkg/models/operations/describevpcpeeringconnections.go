package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVpcPeeringConnectionsXAmzTargetEnum string

const (
	DescribeVpcPeeringConnectionsXAmzTargetEnumGameLiftDescribeVpcPeeringConnections DescribeVpcPeeringConnectionsXAmzTargetEnum = "GameLift.DescribeVpcPeeringConnections"
)

type DescribeVpcPeeringConnectionsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVpcPeeringConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeVpcPeeringConnectionsRequest struct {
	Headers DescribeVpcPeeringConnectionsHeaders
	Request shared.DescribeVpcPeeringConnectionsInput `request:"mediaType=application/json"`
}

type DescribeVpcPeeringConnectionsResponse struct {
	ContentType                         string
	DescribeVpcPeeringConnectionsOutput *shared.DescribeVpcPeeringConnectionsOutput
	InternalServiceException            *interface{}
	InvalidRequestException             *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	UnauthorizedException               *interface{}
}
