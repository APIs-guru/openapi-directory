package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetCapacityQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFleetCapacityXAmzTargetEnum string

const (
	DescribeFleetCapacityXAmzTargetEnumGameLiftDescribeFleetCapacity DescribeFleetCapacityXAmzTargetEnum = "GameLift.DescribeFleetCapacity"
)

type DescribeFleetCapacityHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetCapacityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFleetCapacityRequest struct {
	QueryParams DescribeFleetCapacityQueryParams
	Headers     DescribeFleetCapacityHeaders
	Request     shared.DescribeFleetCapacityInput `request:"mediaType=application/json"`
}

type DescribeFleetCapacityResponse struct {
	ContentType                 string
	DescribeFleetCapacityOutput *shared.DescribeFleetCapacityOutput
	InternalServiceException    *interface{}
	InvalidRequestException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
