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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetCapacityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
