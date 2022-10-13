package operations

import (
	"openapi/pkg/models/shared"
)

type SearchGameSessionsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type SearchGameSessionsXAmzTargetEnum string

const (
	SearchGameSessionsXAmzTargetEnumGameLiftSearchGameSessions SearchGameSessionsXAmzTargetEnum = "GameLift.SearchGameSessions"
)

type SearchGameSessionsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchGameSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchGameSessionsRequest struct {
	QueryParams SearchGameSessionsQueryParams
	Headers     SearchGameSessionsHeaders
	Request     shared.SearchGameSessionsInput `request:"mediaType=application/json"`
}

type SearchGameSessionsResponse struct {
	ContentType                      string
	InternalServiceException         *interface{}
	InvalidRequestException          *interface{}
	NotFoundException                *interface{}
	SearchGameSessionsOutput         *shared.SearchGameSessionsOutput
	StatusCode                       int64
	TerminalRoutingStrategyException *interface{}
	UnauthorizedException            *interface{}
}
