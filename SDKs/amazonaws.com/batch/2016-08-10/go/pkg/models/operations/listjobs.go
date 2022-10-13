package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListJobsRequestBodyJobStatusEnum string

const (
	ListJobsRequestBodyJobStatusEnumSubmitted ListJobsRequestBodyJobStatusEnum = "SUBMITTED"
	ListJobsRequestBodyJobStatusEnumPending   ListJobsRequestBodyJobStatusEnum = "PENDING"
	ListJobsRequestBodyJobStatusEnumRunnable  ListJobsRequestBodyJobStatusEnum = "RUNNABLE"
	ListJobsRequestBodyJobStatusEnumStarting  ListJobsRequestBodyJobStatusEnum = "STARTING"
	ListJobsRequestBodyJobStatusEnumRunning   ListJobsRequestBodyJobStatusEnum = "RUNNING"
	ListJobsRequestBodyJobStatusEnumSucceeded ListJobsRequestBodyJobStatusEnum = "SUCCEEDED"
	ListJobsRequestBodyJobStatusEnumFailed    ListJobsRequestBodyJobStatusEnum = "FAILED"
)

type ListJobsRequestBody struct {
	ArrayJobID     *string                           `json:"arrayJobId"`
	Filters        []shared.KeyValuesPair            `json:"filters"`
	JobQueue       *string                           `json:"jobQueue"`
	JobStatus      *ListJobsRequestBodyJobStatusEnum `json:"jobStatus"`
	MaxResults     *int64                            `json:"maxResults"`
	MultiNodeJobID *string                           `json:"multiNodeJobId"`
	NextToken      *string                           `json:"nextToken"`
}

type ListJobsRequest struct {
	QueryParams ListJobsQueryParams
	Headers     ListJobsHeaders
	Request     ListJobsRequestBody `request:"mediaType=application/json"`
}

type ListJobsResponse struct {
	ClientException  *interface{}
	ContentType      string
	ListJobsResponse *shared.ListJobsResponse
	ServerException  *interface{}
	StatusCode       int64
}
