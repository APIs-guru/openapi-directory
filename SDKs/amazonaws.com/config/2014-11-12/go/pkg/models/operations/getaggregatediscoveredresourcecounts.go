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
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateDiscoveredResourceCountsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
