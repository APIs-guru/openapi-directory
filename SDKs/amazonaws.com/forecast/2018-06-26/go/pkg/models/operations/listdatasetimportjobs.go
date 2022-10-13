package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatasetImportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDatasetImportJobsXAmzTargetEnum string

const (
	ListDatasetImportJobsXAmzTargetEnumAmazonForecastListDatasetImportJobs ListDatasetImportJobsXAmzTargetEnum = "AmazonForecast.ListDatasetImportJobs"
)

type ListDatasetImportJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatasetImportJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDatasetImportJobsRequest struct {
	QueryParams ListDatasetImportJobsQueryParams
	Headers     ListDatasetImportJobsHeaders
	Request     shared.ListDatasetImportJobsRequest `request:"mediaType=application/json"`
}

type ListDatasetImportJobsResponse struct {
	ContentType                   string
	InvalidInputException         *interface{}
	InvalidNextTokenException     *interface{}
	ListDatasetImportJobsResponse *shared.ListDatasetImportJobsResponse
	StatusCode                    int64
}
