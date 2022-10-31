package operations

import (
	"openapi/pkg/models/shared"
)

type StopFleetActionsXAmzTargetEnum string

const (
	StopFleetActionsXAmzTargetEnumGameLiftStopFleetActions StopFleetActionsXAmzTargetEnum = "GameLift.StopFleetActions"
)

type StopFleetActionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopFleetActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
