package operations

import (
	"openapi/pkg/models/shared"
)

type GetGameSessionLogURLXAmzTargetEnum string

const (
	GetGameSessionLogURLXAmzTargetEnumGameLiftGetGameSessionLogURL GetGameSessionLogURLXAmzTargetEnum = "GameLift.GetGameSessionLogUrl"
)

type GetGameSessionLogURLHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGameSessionLogURLXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
