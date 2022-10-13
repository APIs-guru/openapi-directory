package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGameServerGroupXAmzTargetEnum string

const (
	UpdateGameServerGroupXAmzTargetEnumGameLiftUpdateGameServerGroup UpdateGameServerGroupXAmzTargetEnum = "GameLift.UpdateGameServerGroup"
)

type UpdateGameServerGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGameServerGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGameServerGroupRequest struct {
	Headers UpdateGameServerGroupHeaders
	Request shared.UpdateGameServerGroupInput `request:"mediaType=application/json"`
}

type UpdateGameServerGroupResponse struct {
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidRequestException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
	UpdateGameServerGroupOutput *shared.UpdateGameServerGroupOutput
}
