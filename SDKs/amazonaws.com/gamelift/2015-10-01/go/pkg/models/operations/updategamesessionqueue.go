package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGameSessionQueueXAmzTargetEnum string

const (
	UpdateGameSessionQueueXAmzTargetEnumGameLiftUpdateGameSessionQueue UpdateGameSessionQueueXAmzTargetEnum = "GameLift.UpdateGameSessionQueue"
)

type UpdateGameSessionQueueHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGameSessionQueueXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGameSessionQueueRequest struct {
	Headers UpdateGameSessionQueueHeaders
	Request shared.UpdateGameSessionQueueInput `request:"mediaType=application/json"`
}

type UpdateGameSessionQueueResponse struct {
	ContentType                  string
	InternalServiceException     *interface{}
	InvalidRequestException      *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	UnauthorizedException        *interface{}
	UpdateGameSessionQueueOutput *shared.UpdateGameSessionQueueOutput
}
