package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameSessionPlacementXAmzTargetEnum string

const (
	DescribeGameSessionPlacementXAmzTargetEnumGameLiftDescribeGameSessionPlacement DescribeGameSessionPlacementXAmzTargetEnum = "GameLift.DescribeGameSessionPlacement"
)

type DescribeGameSessionPlacementHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameSessionPlacementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGameSessionPlacementRequest struct {
	Headers DescribeGameSessionPlacementHeaders
	Request shared.DescribeGameSessionPlacementInput `request:"mediaType=application/json"`
}

type DescribeGameSessionPlacementResponse struct {
	ContentType                        string
	DescribeGameSessionPlacementOutput *shared.DescribeGameSessionPlacementOutput
	InternalServiceException           *interface{}
	InvalidRequestException            *interface{}
	NotFoundException                  *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
}
