package operations

import (
	"openapi/pkg/models/shared"
)

type StopMatchmakingXAmzTargetEnum string

const (
	StopMatchmakingXAmzTargetEnumGameLiftStopMatchmaking StopMatchmakingXAmzTargetEnum = "GameLift.StopMatchmaking"
)

type StopMatchmakingHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopMatchmakingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopMatchmakingRequest struct {
	Headers StopMatchmakingHeaders
	Request shared.StopMatchmakingInput `request:"mediaType=application/json"`
}

type StopMatchmakingResponse struct {
	ContentType                string
	InternalServiceException   *interface{}
	InvalidRequestException    *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
	StopMatchmakingOutput      map[string]interface{}
	UnsupportedRegionException *interface{}
}
