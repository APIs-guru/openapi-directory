package operations

import (
	"openapi/pkg/models/shared"
)

type ListForecastExportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListForecastExportJobsXAmzTargetEnum string

const (
	ListForecastExportJobsXAmzTargetEnumAmazonForecastListForecastExportJobs ListForecastExportJobsXAmzTargetEnum = "AmazonForecast.ListForecastExportJobs"
)

type ListForecastExportJobsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListForecastExportJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListForecastExportJobsRequest struct {
	QueryParams ListForecastExportJobsQueryParams
	Headers     ListForecastExportJobsHeaders
	Request     shared.ListForecastExportJobsRequest `request:"mediaType=application/json"`
}

type ListForecastExportJobsResponse struct {
	ContentType                    string
	InvalidInputException          *interface{}
	InvalidNextTokenException      *interface{}
	ListForecastExportJobsResponse *shared.ListForecastExportJobsResponse
	StatusCode                     int64
}
