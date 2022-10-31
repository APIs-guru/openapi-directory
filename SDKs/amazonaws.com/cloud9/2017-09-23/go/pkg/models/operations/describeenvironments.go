package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEnvironmentsXAmzTargetEnum string

const (
	DescribeEnvironmentsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironments DescribeEnvironmentsXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DescribeEnvironments"
)

type DescribeEnvironmentsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEnvironmentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
