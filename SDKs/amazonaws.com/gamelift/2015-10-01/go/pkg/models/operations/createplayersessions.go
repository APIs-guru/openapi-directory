package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePlayerSessionsXAmzTargetEnum string

const (
	CreatePlayerSessionsXAmzTargetEnumGameLiftCreatePlayerSessions CreatePlayerSessionsXAmzTargetEnum = "GameLift.CreatePlayerSessions"
)

type CreatePlayerSessionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePlayerSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePlayerSessionsRequest struct {
	Headers CreatePlayerSessionsHeaders
	Request shared.CreatePlayerSessionsInput `request:"mediaType=application/json"`
}

type CreatePlayerSessionsResponse struct {
	ContentType                       string
	CreatePlayerSessionsOutput        *shared.CreatePlayerSessionsOutput
	GameSessionFullException          *interface{}
	InternalServiceException          *interface{}
	InvalidGameSessionStatusException *interface{}
	InvalidRequestException           *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	TerminalRoutingStrategyException  *interface{}
	UnauthorizedException             *interface{}
}
