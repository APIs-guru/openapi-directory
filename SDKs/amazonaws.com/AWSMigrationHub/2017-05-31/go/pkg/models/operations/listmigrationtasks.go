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
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMigrationTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
