package operations

import (
	"openapi/pkg/models/shared"
)

type GetGameSessionLogURLXAmzTargetEnum string

const (
	GetGameSessionLogURLXAmzTargetEnumGameLiftGetGameSessionLogURL GetGameSessionLogURLXAmzTargetEnum = "GameLift.GetGameSessionLogUrl"
)

type GetGameSessionLogURLHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGameSessionLogURLXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetGameSessionLogURLRequest struct {
	Headers GetGameSessionLogURLHeaders
	Request shared.GetGameSessionLogURLInput `request:"mediaType=application/json"`
}

type GetGameSessionLogURLResponse struct {
	ContentType                string
	GetGameSessionLogURLOutput *shared.GetGameSessionLogURLOutput
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
	UnauthorizedException      *interface{}
}
