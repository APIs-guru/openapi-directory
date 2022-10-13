package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameSessionQueuesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeGameSessionQueuesXAmzTargetEnum string

const (
	DescribeGameSessionQueuesXAmzTargetEnumGameLiftDescribeGameSessionQueues DescribeGameSessionQueuesXAmzTargetEnum = "GameLift.DescribeGameSessionQueues"
)

type DescribeGameSessionQueuesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameSessionQueuesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGameSessionQueuesRequest struct {
	QueryParams DescribeGameSessionQueuesQueryParams
	Headers     DescribeGameSessionQueuesHeaders
	Request     shared.DescribeGameSessionQueuesInput `request:"mediaType=application/json"`
}

type DescribeGameSessionQueuesResponse struct {
	ContentType                     string
	DescribeGameSessionQueuesOutput *shared.DescribeGameSessionQueuesOutput
	InternalServiceException        *interface{}
	InvalidRequestException         *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
