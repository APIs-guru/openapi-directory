package operations

import (
	"openapi/pkg/models/shared"
)

type SuspendGameServerGroupXAmzTargetEnum string

const (
	SuspendGameServerGroupXAmzTargetEnumGameLiftSuspendGameServerGroup SuspendGameServerGroupXAmzTargetEnum = "GameLift.SuspendGameServerGroup"
)

type SuspendGameServerGroupHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SuspendGameServerGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SuspendGameServerGroupRequest struct {
	Headers SuspendGameServerGroupHeaders
	Request shared.SuspendGameServerGroupInput `request:"mediaType=application/json"`
}

type SuspendGameServerGroupResponse struct {
	ContentType                  string
	InternalServiceException     *interface{}
	InvalidRequestException      *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	SuspendGameServerGroupOutput *shared.SuspendGameServerGroupOutput
	UnauthorizedException        *interface{}
}
