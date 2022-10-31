package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentXAmzTargetEnum string

const (
	UpdateEnvironmentXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUpdateEnvironment UpdateEnvironmentXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.UpdateEnvironment"
)

type UpdateEnvironmentHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEnvironmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateEnvironmentRequest struct {
	Headers UpdateEnvironmentHeaders
	Request shared.UpdateEnvironmentRequest `request:"mediaType=application/json"`
}

type UpdateEnvironmentResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateEnvironmentResult      map[string]interface{}
}
