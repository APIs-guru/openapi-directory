package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGameSessionXAmzTargetEnum string

const (
	UpdateGameSessionXAmzTargetEnumGameLiftUpdateGameSession UpdateGameSessionXAmzTargetEnum = "GameLift.UpdateGameSession"
)

type UpdateGameSessionHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGameSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateGameSessionRequest struct {
	Headers UpdateGameSessionHeaders
	Request shared.UpdateGameSessionInput `request:"mediaType=application/json"`
}

type UpdateGameSessionResponse struct {
	ConflictException                 *interface{}
	ContentType                       string
	InternalServiceException          *interface{}
	InvalidGameSessionStatusException *interface{}
	InvalidRequestException           *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	UnauthorizedException             *interface{}
	UpdateGameSessionOutput           *shared.UpdateGameSessionOutput
}
