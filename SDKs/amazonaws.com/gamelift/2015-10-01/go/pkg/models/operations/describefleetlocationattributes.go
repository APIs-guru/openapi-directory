package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetLocationAttributesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFleetLocationAttributesXAmzTargetEnum string

const (
	DescribeFleetLocationAttributesXAmzTargetEnumGameLiftDescribeFleetLocationAttributes DescribeFleetLocationAttributesXAmzTargetEnum = "GameLift.DescribeFleetLocationAttributes"
)

type DescribeFleetLocationAttributesHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetLocationAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFleetLocationAttributesRequest struct {
	QueryParams DescribeFleetLocationAttributesQueryParams
	Headers     DescribeFleetLocationAttributesHeaders
	Request     shared.DescribeFleetLocationAttributesInput `request:"mediaType=application/json"`
}

type DescribeFleetLocationAttributesResponse struct {
	ContentType                           string
	DescribeFleetLocationAttributesOutput *shared.DescribeFleetLocationAttributesOutput
	InternalServiceException              *interface{}
	InvalidRequestException               *interface{}
	NotFoundException                     *interface{}
	StatusCode                            int64
	UnauthorizedException                 *interface{}
}
