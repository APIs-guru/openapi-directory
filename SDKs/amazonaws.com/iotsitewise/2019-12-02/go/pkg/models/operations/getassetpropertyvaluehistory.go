package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAssetPropertyValueHistoryTimeOrderingEnum string

const (
	GetAssetPropertyValueHistoryTimeOrderingEnumAscending  GetAssetPropertyValueHistoryTimeOrderingEnum = "ASCENDING"
	GetAssetPropertyValueHistoryTimeOrderingEnumDescending GetAssetPropertyValueHistoryTimeOrderingEnum = "DESCENDING"
)

type GetAssetPropertyValueHistoryQueryParams struct {
	AssetID       *string                                       `queryParam:"style=form,explode=true,name=assetId"`
	EndDate       *time.Time                                    `queryParam:"style=form,explode=true,name=endDate"`
	MaxResults    *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                                       `queryParam:"style=form,explode=true,name=nextToken"`
	PropertyAlias *string                                       `queryParam:"style=form,explode=true,name=propertyAlias"`
	PropertyID    *string                                       `queryParam:"style=form,explode=true,name=propertyId"`
	Qualities     []shared.QualityEnum                          `queryParam:"style=form,explode=true,name=qualities"`
	StartDate     *time.Time                                    `queryParam:"style=form,explode=true,name=startDate"`
	TimeOrdering  *GetAssetPropertyValueHistoryTimeOrderingEnum `queryParam:"style=form,explode=true,name=timeOrdering"`
}

type GetAssetPropertyValueHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssetPropertyValueHistoryRequest struct {
	QueryParams GetAssetPropertyValueHistoryQueryParams
	Headers     GetAssetPropertyValueHistoryHeaders
}

type GetAssetPropertyValueHistoryResponse struct {
	ContentType                          string
	GetAssetPropertyValueHistoryResponse *shared.GetAssetPropertyValueHistoryResponse
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
