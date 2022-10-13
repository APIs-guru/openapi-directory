package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEnvironmentMembershipsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeEnvironmentMembershipsXAmzTargetEnum string

const (
	DescribeEnvironmentMembershipsXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships DescribeEnvironmentMembershipsXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships"
)

type DescribeEnvironmentMembershipsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEnvironmentMembershipsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEnvironmentMembershipsRequest struct {
	QueryParams DescribeEnvironmentMembershipsQueryParams
	Headers     DescribeEnvironmentMembershipsHeaders
	Request     shared.DescribeEnvironmentMembershipsRequest `request:"mediaType=application/json"`
}

type DescribeEnvironmentMembershipsResponse struct {
	BadRequestException                  *interface{}
	ConflictException                    *interface{}
	ContentType                          string
	DescribeEnvironmentMembershipsResult *shared.DescribeEnvironmentMembershipsResult
	ForbiddenException                   *interface{}
	InternalServerErrorException         *interface{}
	LimitExceededException               *interface{}
	NotFoundException                    *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
