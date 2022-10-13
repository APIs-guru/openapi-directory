package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGameServerGroupXAmzTargetEnum string

const (
	CreateGameServerGroupXAmzTargetEnumGameLiftCreateGameServerGroup CreateGameServerGroupXAmzTargetEnum = "GameLift.CreateGameServerGroup"
)

type CreateGameServerGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGameServerGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGameServerGroupRequest struct {
	Headers CreateGameServerGroupHeaders
	Request shared.CreateGameServerGroupInput `request:"mediaType=application/json"`
}

type CreateGameServerGroupResponse struct {
	ConflictException           *interface{}
	ContentType                 string
	CreateGameServerGroupOutput *shared.CreateGameServerGroupOutput
	InternalServiceException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
