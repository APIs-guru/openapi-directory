package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGameServerXAmzTargetEnum string

const (
	UpdateGameServerXAmzTargetEnumGameLiftUpdateGameServer UpdateGameServerXAmzTargetEnum = "GameLift.UpdateGameServer"
)

type UpdateGameServerHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGameServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGameServerRequest struct {
	Headers UpdateGameServerHeaders
	Request shared.UpdateGameServerInput `request:"mediaType=application/json"`
}

type UpdateGameServerResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
	UpdateGameServerOutput   *shared.UpdateGameServerOutput
}
