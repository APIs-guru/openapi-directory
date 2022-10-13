package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGameSessionXAmzTargetEnum string

const (
	CreateGameSessionXAmzTargetEnumGameLiftCreateGameSession CreateGameSessionXAmzTargetEnum = "GameLift.CreateGameSession"
)

type CreateGameSessionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGameSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGameSessionRequest struct {
	Headers CreateGameSessionHeaders
	Request shared.CreateGameSessionInput `request:"mediaType=application/json"`
}

type CreateGameSessionResponse struct {
	ConflictException                    *interface{}
	ContentType                          string
	CreateGameSessionOutput              *shared.CreateGameSessionOutput
	FleetCapacityExceededException       *interface{}
	IdempotentParameterMismatchException *interface{}
	InternalServiceException             *interface{}
	InvalidFleetStatusException          *interface{}
	InvalidRequestException              *interface{}
	LimitExceededException               *interface{}
	NotFoundException                    *interface{}
	StatusCode                           int64
	TerminalRoutingStrategyException     *interface{}
	UnauthorizedException                *interface{}
}
