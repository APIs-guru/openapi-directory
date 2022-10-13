package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentMembershipXAmzTargetEnum string

const (
	UpdateEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembership UpdateEnvironmentMembershipXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership"
)

type UpdateEnvironmentMembershipHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentMembershipXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEnvironmentMembershipRequest struct {
	Headers UpdateEnvironmentMembershipHeaders
	Request shared.UpdateEnvironmentMembershipRequest `request:"mediaType=application/json"`
}

type UpdateEnvironmentMembershipResponse struct {
	BadRequestException               *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	ForbiddenException                *interface{}
	InternalServerErrorException      *interface{}
	LimitExceededException            *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UpdateEnvironmentMembershipResult *shared.UpdateEnvironmentMembershipResult
}
