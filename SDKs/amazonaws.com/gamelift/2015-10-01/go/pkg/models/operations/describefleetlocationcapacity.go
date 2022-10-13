package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetLocationCapacityXAmzTargetEnum string

const (
	DescribeFleetLocationCapacityXAmzTargetEnumGameLiftDescribeFleetLocationCapacity DescribeFleetLocationCapacityXAmzTargetEnum = "GameLift.DescribeFleetLocationCapacity"
)

type DescribeFleetLocationCapacityHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetLocationCapacityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFleetLocationCapacityRequest struct {
	Headers DescribeFleetLocationCapacityHeaders
	Request shared.DescribeFleetLocationCapacityInput `request:"mediaType=application/json"`
}

type DescribeFleetLocationCapacityResponse struct {
	ContentType                         string
	DescribeFleetLocationCapacityOutput *shared.DescribeFleetLocationCapacityOutput
	InternalServiceException            *interface{}
	InvalidRequestException             *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	UnauthorizedException               *interface{}
}
