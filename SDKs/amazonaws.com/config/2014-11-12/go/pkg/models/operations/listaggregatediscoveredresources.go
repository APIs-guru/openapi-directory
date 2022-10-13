package operations

import (
	"openapi/pkg/models/shared"
)

type ListAggregateDiscoveredResourcesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAggregateDiscoveredResourcesXAmzTargetEnum string

const (
	ListAggregateDiscoveredResourcesXAmzTargetEnumStarlingDoveServiceListAggregateDiscoveredResources ListAggregateDiscoveredResourcesXAmzTargetEnum = "StarlingDoveService.ListAggregateDiscoveredResources"
)

type ListAggregateDiscoveredResourcesHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAggregateDiscoveredResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAggregateDiscoveredResourcesRequest struct {
	QueryParams ListAggregateDiscoveredResourcesQueryParams
	Headers     ListAggregateDiscoveredResourcesHeaders
	Request     shared.ListAggregateDiscoveredResourcesRequest `request:"mediaType=application/json"`
}

type ListAggregateDiscoveredResourcesResponse struct {
	ContentType                              string
	InvalidLimitException                    *interface{}
	InvalidNextTokenException                *interface{}
	ListAggregateDiscoveredResourcesResponse *shared.ListAggregateDiscoveredResourcesResponse
	NoSuchConfigurationAggregatorException   *interface{}
	StatusCode                               int64
	ValidationException                      *interface{}
}
