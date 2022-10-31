package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetAttributesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeFleetAttributesXAmzTargetEnum string

const (
	DescribeFleetAttributesXAmzTargetEnumGameLiftDescribeFleetAttributes DescribeFleetAttributesXAmzTargetEnum = "GameLift.DescribeFleetAttributes"
)

type DescribeFleetAttributesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFleetAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeFleetAttributesRequest struct {
	QueryParams DescribeFleetAttributesQueryParams
	Headers     DescribeFleetAttributesHeaders
	Request     shared.DescribeFleetAttributesInput `request:"mediaType=application/json"`
}

type DescribeFleetAttributesResponse struct {
	ContentType                   string
	DescribeFleetAttributesOutput *shared.DescribeFleetAttributesOutput
	InternalServiceException      *interface{}
	InvalidRequestException       *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnauthorizedException         *interface{}
}
