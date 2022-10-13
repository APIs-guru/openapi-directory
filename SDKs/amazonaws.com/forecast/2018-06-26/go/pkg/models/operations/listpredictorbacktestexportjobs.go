package operations

import (
	"openapi/pkg/models/shared"
)

type ListPredictorBacktestExportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPredictorBacktestExportJobsXAmzTargetEnum string

const (
	ListPredictorBacktestExportJobsXAmzTargetEnumAmazonForecastListPredictorBacktestExportJobs ListPredictorBacktestExportJobsXAmzTargetEnum = "AmazonForecast.ListPredictorBacktestExportJobs"
)

type ListPredictorBacktestExportJobsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPredictorBacktestExportJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPredictorBacktestExportJobsRequest struct {
	QueryParams ListPredictorBacktestExportJobsQueryParams
	Headers     ListPredictorBacktestExportJobsHeaders
	Request     shared.ListPredictorBacktestExportJobsRequest `request:"mediaType=application/json"`
}

type ListPredictorBacktestExportJobsResponse struct {
	ContentType                             string
	InvalidInputException                   *interface{}
	InvalidNextTokenException               *interface{}
	ListPredictorBacktestExportJobsResponse *shared.ListPredictorBacktestExportJobsResponse
	StatusCode                              int64
}
