package operations

import (
	"openapi/pkg/models/shared"
)

type ListDiscoveredResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDiscoveredResourcesXAmzTargetEnum string

const (
	ListDiscoveredResourcesXAmzTargetEnumAwsMigrationHubListDiscoveredResources ListDiscoveredResourcesXAmzTargetEnum = "AWSMigrationHub.ListDiscoveredResources"
)

type ListDiscoveredResourcesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDiscoveredResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDiscoveredResourcesRequest struct {
	QueryParams ListDiscoveredResourcesQueryParams
	Headers     ListDiscoveredResourcesHeaders
	Request     shared.ListDiscoveredResourcesRequest `request:"mediaType=application/json"`
}

type ListDiscoveredResourcesResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	HomeRegionNotSetException     *interface{}
	InternalServerError           *interface{}
	InvalidInputException         *interface{}
	ListDiscoveredResourcesResult *shared.ListDiscoveredResourcesResult
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
