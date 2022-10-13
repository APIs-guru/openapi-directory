package operations

import (
	"openapi/pkg/models/shared"
)

type GetDiscoveredResourceCountsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetDiscoveredResourceCountsXAmzTargetEnum string

const (
	GetDiscoveredResourceCountsXAmzTargetEnumStarlingDoveServiceGetDiscoveredResourceCounts GetDiscoveredResourceCountsXAmzTargetEnum = "StarlingDoveService.GetDiscoveredResourceCounts"
)

type GetDiscoveredResourceCountsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDiscoveredResourceCountsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDiscoveredResourceCountsRequest struct {
	QueryParams GetDiscoveredResourceCountsQueryParams
	Headers     GetDiscoveredResourceCountsHeaders
	Request     shared.GetDiscoveredResourceCountsRequest `request:"mediaType=application/json"`
}

type GetDiscoveredResourceCountsResponse struct {
	ContentType                         string
	GetDiscoveredResourceCountsResponse *shared.GetDiscoveredResourceCountsResponse
	InvalidLimitException               *interface{}
	InvalidNextTokenException           *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
