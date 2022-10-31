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
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEnvironmentMembershipsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
