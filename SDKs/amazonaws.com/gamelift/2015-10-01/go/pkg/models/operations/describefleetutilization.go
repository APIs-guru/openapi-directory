package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetUtilizationQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFleetUtilizationXAmzTargetEnum string

const (
	DescribeFleetUtilizationXAmzTargetEnumGameLiftDescribeFleetUtilization DescribeFleetUtilizationXAmzTargetEnum = "GameLift.DescribeFleetUtilization"
)

type DescribeFleetUtilizationHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetUtilizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFleetUtilizationRequest struct {
	QueryParams DescribeFleetUtilizationQueryParams
	Headers     DescribeFleetUtilizationHeaders
	Request     shared.DescribeFleetUtilizationInput `request:"mediaType=application/json"`
}

type DescribeFleetUtilizationResponse struct {
	ContentType                    string
	DescribeFleetUtilizationOutput *shared.DescribeFleetUtilizationOutput
	InternalServiceException       *interface{}
	InvalidRequestException        *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	UnauthorizedException          *interface{}
}
