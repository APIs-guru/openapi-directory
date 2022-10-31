package operations

import (
	"openapi/pkg/models/shared"
)

type GetInterpolatedAssetPropertyValuesQualityEnum string

const (
	GetInterpolatedAssetPropertyValuesQualityEnumGood      GetInterpolatedAssetPropertyValuesQualityEnum = "GOOD"
	GetInterpolatedAssetPropertyValuesQualityEnumBad       GetInterpolatedAssetPropertyValuesQualityEnum = "BAD"
	GetInterpolatedAssetPropertyValuesQualityEnumUncertain GetInterpolatedAssetPropertyValuesQualityEnum = "UNCERTAIN"
)

type GetInterpolatedAssetPropertyValuesQueryParams struct {
	AssetID                 *string                                       `queryParam:"style=form,explode=true,name=assetId"`
	EndTimeInSeconds        int64                                         `queryParam:"style=form,explode=true,name=endTimeInSeconds"`
	EndTimeOffsetInNanos    *int64                                        `queryParam:"style=form,explode=true,name=endTimeOffsetInNanos"`
	IntervalInSeconds       int64                                         `queryParam:"style=form,explode=true,name=intervalInSeconds"`
	IntervalWindowInSeconds *int64                                        `queryParam:"style=form,explode=true,name=intervalWindowInSeconds"`
	MaxResults              *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken               *string                                       `queryParam:"style=form,explode=true,name=nextToken"`
	PropertyAlias           *string                                       `queryParam:"style=form,explode=true,name=propertyAlias"`
	PropertyID              *string                                       `queryParam:"style=form,explode=true,name=propertyId"`
	Quality                 GetInterpolatedAssetPropertyValuesQualityEnum `queryParam:"style=form,explode=true,name=quality"`
	StartTimeInSeconds      int64                                         `queryParam:"style=form,explode=true,name=startTimeInSeconds"`
	StartTimeOffsetInNanos  *int64                                        `queryParam:"style=form,explode=true,name=startTimeOffsetInNanos"`
	Type                    string                                        `queryParam:"style=form,explode=true,name=type"`
}

type GetInterpolatedAssetPropertyValuesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetInterpolatedAssetPropertyValuesRequest struct {
	QueryParams GetInterpolatedAssetPropertyValuesQueryParams
	Headers     GetInterpolatedAssetPropertyValuesHeaders
}

type GetInterpolatedAssetPropertyValuesResponse struct {
	ContentType                                string
	GetInterpolatedAssetPropertyValuesResponse *shared.GetInterpolatedAssetPropertyValuesResponse
	InternalFailureException                   *interface{}
	InvalidRequestException                    *interface{}
	ResourceNotFoundException                  *interface{}
	ServiceUnavailableException                *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}
