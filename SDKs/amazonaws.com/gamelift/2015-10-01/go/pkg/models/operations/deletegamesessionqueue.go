package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGameSessionQueueXAmzTargetEnum string

const (
	DeleteGameSessionQueueXAmzTargetEnumGameLiftDeleteGameSessionQueue DeleteGameSessionQueueXAmzTargetEnum = "GameLift.DeleteGameSessionQueue"
)

type DeleteGameSessionQueueHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGameSessionQueueXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteGameSessionQueueRequest struct {
	Headers DeleteGameSessionQueueHeaders
	Request shared.DeleteGameSessionQueueInput `request:"mediaType=application/json"`
}

type DeleteGameSessionQueueResponse struct {
	ContentType                  string
	DeleteGameSessionQueueOutput map[string]interface{}
	InternalServiceException     *interface{}
	InvalidRequestException      *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	TaggingFailedException       *interface{}
	UnauthorizedException        *interface{}
}
