package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterGameServerXAmzTargetEnum string

const (
	RegisterGameServerXAmzTargetEnumGameLiftRegisterGameServer RegisterGameServerXAmzTargetEnum = "GameLift.RegisterGameServer"
)

type RegisterGameServerHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterGameServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterGameServerRequest struct {
	Headers RegisterGameServerHeaders
	Request shared.RegisterGameServerInput `request:"mediaType=application/json"`
}

type RegisterGameServerResponse struct {
	ConflictException        *interface{}
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	LimitExceededException   *interface{}
	RegisterGameServerOutput *shared.RegisterGameServerOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
