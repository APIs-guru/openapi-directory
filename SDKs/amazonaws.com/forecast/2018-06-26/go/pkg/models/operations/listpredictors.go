package operations

import (
	"openapi/pkg/models/shared"
)

type ListPredictorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPredictorsXAmzTargetEnum string

const (
	ListPredictorsXAmzTargetEnumAmazonForecastListPredictors ListPredictorsXAmzTargetEnum = "AmazonForecast.ListPredictors"
)

type ListPredictorsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPredictorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPredictorsRequest struct {
	QueryParams ListPredictorsQueryParams
	Headers     ListPredictorsHeaders
	Request     shared.ListPredictorsRequest `request:"mediaType=application/json"`
}

type ListPredictorsResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	InvalidNextTokenException *interface{}
	ListPredictorsResponse    *shared.ListPredictorsResponse
	StatusCode                int64
}
