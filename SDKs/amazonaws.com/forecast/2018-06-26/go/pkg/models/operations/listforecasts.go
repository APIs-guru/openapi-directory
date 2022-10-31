package operations

import (
	"openapi/pkg/models/shared"
)

type ListForecastsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListForecastsXAmzTargetEnum string

const (
	ListForecastsXAmzTargetEnumAmazonForecastListForecasts ListForecastsXAmzTargetEnum = "AmazonForecast.ListForecasts"
)

type ListForecastsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListForecastsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListForecastsRequest struct {
	QueryParams ListForecastsQueryParams
	Headers     ListForecastsHeaders
	Request     shared.ListForecastsRequest `request:"mediaType=application/json"`
}

type ListForecastsResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	InvalidNextTokenException *interface{}
	ListForecastsResponse     *shared.ListForecastsResponse
	StatusCode                int64
}
