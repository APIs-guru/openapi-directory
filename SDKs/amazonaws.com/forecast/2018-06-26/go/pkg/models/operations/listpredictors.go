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
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPredictorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
