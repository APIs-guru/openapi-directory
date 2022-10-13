package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentMembershipXAmzTargetEnum string

const (
	CreateEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentMembership CreateEnvironmentMembershipXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership"
)

type CreateEnvironmentMembershipHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEnvironmentMembershipXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEnvironmentMembershipRequest struct {
	Headers CreateEnvironmentMembershipHeaders
	Request shared.CreateEnvironmentMembershipRequest `request:"mediaType=application/json"`
}

type CreateEnvironmentMembershipResponse struct {
	BadRequestException               *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	CreateEnvironmentMembershipResult *shared.CreateEnvironmentMembershipResult
	ForbiddenException                *interface{}
	InternalServerErrorException      *interface{}
	LimitExceededException            *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
