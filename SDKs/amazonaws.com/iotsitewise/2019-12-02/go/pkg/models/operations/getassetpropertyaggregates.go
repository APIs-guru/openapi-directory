package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAssetPropertyAggregatesTimeOrderingEnum string

const (
	GetAssetPropertyAggregatesTimeOrderingEnumAscending  GetAssetPropertyAggregatesTimeOrderingEnum = "ASCENDING"
	GetAssetPropertyAggregatesTimeOrderingEnumDescending GetAssetPropertyAggregatesTimeOrderingEnum = "DESCENDING"
)

type GetAssetPropertyAggregatesQueryParams struct {
	AggregateTypes []shared.AggregateTypeEnum                  `queryParam:"style=form,explode=true,name=aggregateTypes"`
	AssetID        *string                                     `queryParam:"style=form,explode=true,name=assetId"`
	EndDate        time.Time                                   `queryParam:"style=form,explode=true,name=endDate"`
	MaxResults     *int64                                      `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken      *string                                     `queryParam:"style=form,explode=true,name=nextToken"`
	PropertyAlias  *string                                     `queryParam:"style=form,explode=true,name=propertyAlias"`
	PropertyID     *string                                     `queryParam:"style=form,explode=true,name=propertyId"`
	Qualities      []shared.QualityEnum                        `queryParam:"style=form,explode=true,name=qualities"`
	Resolution     string                                      `queryParam:"style=form,explode=true,name=resolution"`
	StartDate      time.Time                                   `queryParam:"style=form,explode=true,name=startDate"`
	TimeOrdering   *GetAssetPropertyAggregatesTimeOrderingEnum `queryParam:"style=form,explode=true,name=timeOrdering"`
}

type GetAssetPropertyAggregatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssetPropertyAggregatesRequest struct {
	QueryParams GetAssetPropertyAggregatesQueryParams
	Headers     GetAssetPropertyAggregatesHeaders
}

type GetAssetPropertyAggregatesResponse struct {
	ContentType                        string
	GetAssetPropertyAggregatesResponse *shared.GetAssetPropertyAggregatesResponse
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
