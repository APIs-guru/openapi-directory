package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePlayerSessionXAmzTargetEnum string

const (
	CreatePlayerSessionXAmzTargetEnumGameLiftCreatePlayerSession CreatePlayerSessionXAmzTargetEnum = "GameLift.CreatePlayerSession"
)

type CreatePlayerSessionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePlayerSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePlayerSessionRequest struct {
	Headers CreatePlayerSessionHeaders
	Request shared.CreatePlayerSessionInput `request:"mediaType=application/json"`
}

type CreatePlayerSessionResponse struct {
	ContentType                       string
	CreatePlayerSessionOutput         *shared.CreatePlayerSessionOutput
	GameSessionFullException          *interface{}
	InternalServiceException          *interface{}
	InvalidGameSessionStatusException *interface{}
	InvalidRequestException           *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	TerminalRoutingStrategyException  *interface{}
	UnauthorizedException             *interface{}
}
