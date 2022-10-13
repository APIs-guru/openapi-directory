package operations

import (
	"openapi/pkg/models/shared"
)

type GetAggregateDiscoveredResourceCountsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetAggregateDiscoveredResourceCountsXAmzTargetEnum string

const (
	GetAggregateDiscoveredResourceCountsXAmzTargetEnumStarlingDoveServiceGetAggregateDiscoveredResourceCounts GetAggregateDiscoveredResourceCountsXAmzTargetEnum = "StarlingDoveService.GetAggregateDiscoveredResourceCounts"
)

type GetAggregateDiscoveredResourceCountsHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateDiscoveredResourceCountsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAggregateDiscoveredResourceCountsRequest struct {
	QueryParams GetAggregateDiscoveredResourceCountsQueryParams
	Headers     GetAggregateDiscoveredResourceCountsHeaders
	Request     shared.GetAggregateDiscoveredResourceCountsRequest `request:"mediaType=application/json"`
}

type GetAggregateDiscoveredResourceCountsResponse struct {
	ContentType                                  string
	GetAggregateDiscoveredResourceCountsResponse *shared.GetAggregateDiscoveredResourceCountsResponse
	InvalidLimitException                        *interface{}
	InvalidNextTokenException                    *interface{}
	NoSuchConfigurationAggregatorException       *interface{}
	StatusCode                                   int64
	ValidationException                          *interface{}
}
