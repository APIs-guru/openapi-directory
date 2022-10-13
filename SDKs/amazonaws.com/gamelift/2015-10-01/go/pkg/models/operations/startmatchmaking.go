package operations

import (
	"openapi/pkg/models/shared"
)

type StartMatchmakingXAmzTargetEnum string

const (
	StartMatchmakingXAmzTargetEnumGameLiftStartMatchmaking StartMatchmakingXAmzTargetEnum = "GameLift.StartMatchmaking"
)

type StartMatchmakingHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMatchmakingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMatchmakingRequest struct {
	Headers StartMatchmakingHeaders
	Request shared.StartMatchmakingInput `request:"mediaType=application/json"`
}

type StartMatchmakingResponse struct {
	ContentType                string
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	NotFoundException          *interface{}
	StartMatchmakingOutput     *shared.StartMatchmakingOutput
	StatusCode                 int64
	UnsupportedRegionException *interface{}
}
