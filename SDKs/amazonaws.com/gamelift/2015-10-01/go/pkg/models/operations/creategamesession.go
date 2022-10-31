package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGameSessionXAmzTargetEnum string

const (
	CreateGameSessionXAmzTargetEnumGameLiftCreateGameSession CreateGameSessionXAmzTargetEnum = "GameLift.CreateGameSession"
)

type CreateGameSessionHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGameSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
