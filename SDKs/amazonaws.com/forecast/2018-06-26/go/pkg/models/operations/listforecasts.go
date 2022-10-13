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
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListForecastsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
