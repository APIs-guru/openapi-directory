package operations

import (
	"openapi/pkg/models/shared"
)

type StartGameSessionPlacementXAmzTargetEnum string

const (
	StartGameSessionPlacementXAmzTargetEnumGameLiftStartGameSessionPlacement StartGameSessionPlacementXAmzTargetEnum = "GameLift.StartGameSessionPlacement"
)

type StartGameSessionPlacementHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartGameSessionPlacementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartGameSessionPlacementRequest struct {
	Headers StartGameSessionPlacementHeaders
	Request shared.StartGameSessionPlacementInput `request:"mediaType=application/json"`
}

type StartGameSessionPlacementResponse struct {
	ContentType                     string
	InternalServiceException        *interface{}
	InvalidRequestException         *interface{}
	NotFoundException               *interface{}
	StartGameSessionPlacementOutput *shared.StartGameSessionPlacementOutput
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
