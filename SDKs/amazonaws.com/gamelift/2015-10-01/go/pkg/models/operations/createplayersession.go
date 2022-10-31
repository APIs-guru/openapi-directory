package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePlayerSessionXAmzTargetEnum string

const (
	CreatePlayerSessionXAmzTargetEnumGameLiftCreatePlayerSession CreatePlayerSessionXAmzTargetEnum = "GameLift.CreatePlayerSession"
)

type CreatePlayerSessionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePlayerSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
