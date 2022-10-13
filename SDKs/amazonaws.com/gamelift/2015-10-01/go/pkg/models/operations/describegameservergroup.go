package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameServerGroupXAmzTargetEnum string

const (
	DescribeGameServerGroupXAmzTargetEnumGameLiftDescribeGameServerGroup DescribeGameServerGroupXAmzTargetEnum = "GameLift.DescribeGameServerGroup"
)

type DescribeGameServerGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameServerGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGameServerGroupRequest struct {
	Headers DescribeGameServerGroupHeaders
	Request shared.DescribeGameServerGroupInput `request:"mediaType=application/json"`
}

type DescribeGameServerGroupResponse struct {
	ContentType                   string
	DescribeGameServerGroupOutput *shared.DescribeGameServerGroupOutput
	InternalServiceException      *interface{}
	InvalidRequestException       *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnauthorizedException         *interface{}
}
