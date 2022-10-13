package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEnvironmentXAmzTargetEnum string

const (
	DeleteEnvironmentXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDeleteEnvironment DeleteEnvironmentXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DeleteEnvironment"
)

type DeleteEnvironmentHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEnvironmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEnvironmentRequest struct {
	Headers DeleteEnvironmentHeaders
	Request shared.DeleteEnvironmentRequest `request:"mediaType=application/json"`
}

type DeleteEnvironmentResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	DeleteEnvironmentResult      map[string]interface{}
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
