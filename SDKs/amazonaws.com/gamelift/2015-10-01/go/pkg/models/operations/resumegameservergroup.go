package operations

import (
	"openapi/pkg/models/shared"
)

type ResumeGameServerGroupXAmzTargetEnum string

const (
	ResumeGameServerGroupXAmzTargetEnumGameLiftResumeGameServerGroup ResumeGameServerGroupXAmzTargetEnum = "GameLift.ResumeGameServerGroup"
)

type ResumeGameServerGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResumeGameServerGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResumeGameServerGroupRequest struct {
	Headers ResumeGameServerGroupHeaders
	Request shared.ResumeGameServerGroupInput `request:"mediaType=application/json"`
}

type ResumeGameServerGroupResponse struct {
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidRequestException     *interface{}
	NotFoundException           *interface{}
	ResumeGameServerGroupOutput *shared.ResumeGameServerGroupOutput
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
