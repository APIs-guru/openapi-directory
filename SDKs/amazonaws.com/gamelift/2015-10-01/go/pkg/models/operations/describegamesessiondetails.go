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
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGameSessionDetailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
