package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetLocationCapacityXAmzTargetEnum string

const (
	DescribeFleetLocationCapacityXAmzTargetEnumGameLiftDescribeFleetLocationCapacity DescribeFleetLocationCapacityXAmzTargetEnum = "GameLift.DescribeFleetLocationCapacity"
)

type DescribeFleetLocationCapacityHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetLocationCapacityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
