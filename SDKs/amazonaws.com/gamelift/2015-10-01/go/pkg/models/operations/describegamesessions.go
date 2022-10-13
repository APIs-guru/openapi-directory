package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameSessionsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeGameSessionsXAmzTargetEnum string

const (
	DescribeGameSessionsXAmzTargetEnumGameLiftDescribeGameSessions DescribeGameSessionsXAmzTargetEnum = "GameLift.DescribeGameSessions"
)

type DescribeGameSessionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGameSessionsRequest struct {
	QueryParams DescribeGameSessionsQueryParams
	Headers     DescribeGameSessionsHeaders
	Request     shared.DescribeGameSessionsInput `request:"mediaType=application/json"`
}

type DescribeGameSessionsResponse struct {
	ContentType                      string
	DescribeGameSessionsOutput       *shared.DescribeGameSessionsOutput
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	TerminalRoutingStrategyException *interface{}
	UnauthorizedException            *interface{}
}
