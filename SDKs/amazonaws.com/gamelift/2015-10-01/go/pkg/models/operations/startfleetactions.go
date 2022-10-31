package operations

import (
	"openapi/pkg/models/shared"
)

type StartFleetActionsXAmzTargetEnum string

const (
	StartFleetActionsXAmzTargetEnumGameLiftStartFleetActions StartFleetActionsXAmzTargetEnum = "GameLift.StartFleetActions"
)

type StartFleetActionsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartFleetActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartFleetActionsRequest struct {
	Headers StartFleetActionsHeaders
	Request shared.StartFleetActionsInput `request:"mediaType=application/json"`
}

type StartFleetActionsResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StartFleetActionsOutput  *shared.StartFleetActionsOutput
	StatusCode               int64
	UnauthorizedException    *interface{}
}
