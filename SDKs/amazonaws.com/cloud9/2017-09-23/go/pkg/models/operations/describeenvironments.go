package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEnvironmentsXAmzTargetEnum string

const (
	DescribeEnvironmentsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironments DescribeEnvironmentsXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DescribeEnvironments"
)

type DescribeEnvironmentsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEnvironmentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEnvironmentsRequest struct {
	Headers DescribeEnvironmentsHeaders
	Request shared.DescribeEnvironmentsRequest `request:"mediaType=application/json"`
}

type DescribeEnvironmentsResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	DescribeEnvironmentsResult   *shared.DescribeEnvironmentsResult
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
