package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameServerInstancesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeGameServerInstancesXAmzTargetEnum string

const (
	DescribeGameServerInstancesXAmzTargetEnumGameLiftDescribeGameServerInstances DescribeGameServerInstancesXAmzTargetEnum = "GameLift.DescribeGameServerInstances"
)

type DescribeGameServerInstancesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameServerInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeGameServerInstancesRequest struct {
	QueryParams DescribeGameServerInstancesQueryParams
	Headers     DescribeGameServerInstancesHeaders
	Request     shared.DescribeGameServerInstancesInput `request:"mediaType=application/json"`
}

type DescribeGameServerInstancesResponse struct {
	ContentType                       string
	DescribeGameServerInstancesOutput *shared.DescribeGameServerInstancesOutput
	InternalServiceException          *interface{}
	InvalidRequestException           *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	UnauthorizedException             *interface{}
}
