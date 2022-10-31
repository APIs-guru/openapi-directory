package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetEventsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFleetEventsXAmzTargetEnum string

const (
	DescribeFleetEventsXAmzTargetEnumGameLiftDescribeFleetEvents DescribeFleetEventsXAmzTargetEnum = "GameLift.DescribeFleetEvents"
)

type DescribeFleetEventsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFleetEventsRequest struct {
	QueryParams DescribeFleetEventsQueryParams
	Headers     DescribeFleetEventsHeaders
	Request     shared.DescribeFleetEventsInput `request:"mediaType=application/json"`
}

type DescribeFleetEventsResponse struct {
	ContentType               string
	DescribeFleetEventsOutput *shared.DescribeFleetEventsOutput
	InternalServiceException  *interface{}
	InvalidRequestException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	UnauthorizedException     *interface{}
}
