package operations

import (
	"openapi/pkg/models/shared"
)

type ListMigrationTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMigrationTasksXAmzTargetEnum string

const (
	ListMigrationTasksXAmzTargetEnumAwsMigrationHubListMigrationTasks ListMigrationTasksXAmzTargetEnum = "AWSMigrationHub.ListMigrationTasks"
)

type ListMigrationTasksHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMigrationTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListMigrationTasksRequest struct {
	QueryParams ListMigrationTasksQueryParams
	Headers     ListMigrationTasksHeaders
	Request     shared.ListMigrationTasksRequest `request:"mediaType=application/json"`
}

type ListMigrationTasksResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	HomeRegionNotSetException   *interface{}
	InternalServerError         *interface{}
	InvalidInputException       *interface{}
	ListMigrationTasksResult    *shared.ListMigrationTasksResult
	PolicyErrorException        *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
