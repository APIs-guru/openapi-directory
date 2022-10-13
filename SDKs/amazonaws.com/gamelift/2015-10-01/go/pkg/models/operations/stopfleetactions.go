package operations

import (
	"openapi/pkg/models/shared"
)

type StopFleetActionsXAmzTargetEnum string

const (
	StopFleetActionsXAmzTargetEnumGameLiftStopFleetActions StopFleetActionsXAmzTargetEnum = "GameLift.StopFleetActions"
)

type StopFleetActionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopFleetActionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopFleetActionsRequest struct {
	Headers StopFleetActionsHeaders
	Request shared.StopFleetActionsInput `request:"mediaType=application/json"`
}

type StopFleetActionsResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	StopFleetActionsOutput   *shared.StopFleetActionsOutput
	UnauthorizedException    *interface{}
}
