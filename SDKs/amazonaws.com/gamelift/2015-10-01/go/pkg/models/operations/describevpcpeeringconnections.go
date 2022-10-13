package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVpcPeeringConnectionsXAmzTargetEnum string

const (
	DescribeVpcPeeringConnectionsXAmzTargetEnumGameLiftDescribeVpcPeeringConnections DescribeVpcPeeringConnectionsXAmzTargetEnum = "GameLift.DescribeVpcPeeringConnections"
)

type DescribeVpcPeeringConnectionsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVpcPeeringConnectionsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
