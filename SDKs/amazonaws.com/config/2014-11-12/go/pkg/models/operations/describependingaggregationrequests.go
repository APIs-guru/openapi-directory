package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePendingAggregationRequestsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribePendingAggregationRequestsXAmzTargetEnum string

const (
	DescribePendingAggregationRequestsXAmzTargetEnumStarlingDoveServiceDescribePendingAggregationRequests DescribePendingAggregationRequestsXAmzTargetEnum = "StarlingDoveService.DescribePendingAggregationRequests"
)

type DescribePendingAggregationRequestsHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePendingAggregationRequestsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePendingAggregationRequestsRequest struct {
	QueryParams DescribePendingAggregationRequestsQueryParams
	Headers     DescribePendingAggregationRequestsHeaders
	Request     shared.DescribePendingAggregationRequestsRequest `request:"mediaType=application/json"`
}

type DescribePendingAggregationRequestsResponse struct {
	ContentType                                string
	DescribePendingAggregationRequestsResponse *shared.DescribePendingAggregationRequestsResponse
	InvalidLimitException                      *interface{}
	InvalidNextTokenException                  *interface{}
	InvalidParameterValueException             *interface{}
	StatusCode                                 int64
}
