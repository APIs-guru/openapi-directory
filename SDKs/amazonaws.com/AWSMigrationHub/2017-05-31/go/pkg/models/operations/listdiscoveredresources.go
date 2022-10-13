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
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDiscoveredResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
