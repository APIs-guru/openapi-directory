package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGameSessionDetailsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeGameSessionDetailsXAmzTargetEnum string

const (
	DescribeGameSessionDetailsXAmzTargetEnumGameLiftDescribeGameSessionDetails DescribeGameSessionDetailsXAmzTargetEnum = "GameLift.DescribeGameSessionDetails"
)

type DescribeGameSessionDetailsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameSessionDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGameSessionDetailsRequest struct {
	QueryParams DescribeGameSessionDetailsQueryParams
	Headers     DescribeGameSessionDetailsHeaders
	Request     shared.DescribeGameSessionDetailsInput `request:"mediaType=application/json"`
}

type DescribeGameSessionDetailsResponse struct {
	ContentType                      string
	DescribeGameSessionDetailsOutput *shared.DescribeGameSessionDetailsOutput
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	TerminalRoutingStrategyException *interface{}
	UnauthorizedException            *interface{}
}
