package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetLocationUtilizationXAmzTargetEnum string

const (
	DescribeFleetLocationUtilizationXAmzTargetEnumGameLiftDescribeFleetLocationUtilization DescribeFleetLocationUtilizationXAmzTargetEnum = "GameLift.DescribeFleetLocationUtilization"
)

type DescribeFleetLocationUtilizationHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetLocationUtilizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFleetLocationUtilizationRequest struct {
	Headers DescribeFleetLocationUtilizationHeaders
	Request shared.DescribeFleetLocationUtilizationInput `request:"mediaType=application/json"`
}

type DescribeFleetLocationUtilizationResponse struct {
	ContentType                            string
	DescribeFleetLocationUtilizationOutput *shared.DescribeFleetLocationUtilizationOutput
	InternalServiceException               *interface{}
	InvalidRequestException                *interface{}
	NotFoundException                      *interface{}
	StatusCode                             int64
	UnauthorizedException                  *interface{}
}
