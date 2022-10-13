package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEnvironmentStatusXAmzTargetEnum string

const (
	DescribeEnvironmentStatusXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatus DescribeEnvironmentStatusXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus"
)

type DescribeEnvironmentStatusHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEnvironmentStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEnvironmentStatusRequest struct {
	Headers DescribeEnvironmentStatusHeaders
	Request shared.DescribeEnvironmentStatusRequest `request:"mediaType=application/json"`
}

type DescribeEnvironmentStatusResponse struct {
	BadRequestException             *interface{}
	ConflictException               *interface{}
	ContentType                     string
	DescribeEnvironmentStatusResult *shared.DescribeEnvironmentStatusResult
	ForbiddenException              *interface{}
	InternalServerErrorException    *interface{}
	LimitExceededException          *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
