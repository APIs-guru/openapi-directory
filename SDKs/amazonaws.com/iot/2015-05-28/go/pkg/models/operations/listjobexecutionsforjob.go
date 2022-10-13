package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobExecutionsForJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type ListJobExecutionsForJobStatusEnum string

const (
	ListJobExecutionsForJobStatusEnumQueued     ListJobExecutionsForJobStatusEnum = "QUEUED"
	ListJobExecutionsForJobStatusEnumInProgress ListJobExecutionsForJobStatusEnum = "IN_PROGRESS"
	ListJobExecutionsForJobStatusEnumSucceeded  ListJobExecutionsForJobStatusEnum = "SUCCEEDED"
	ListJobExecutionsForJobStatusEnumFailed     ListJobExecutionsForJobStatusEnum = "FAILED"
	ListJobExecutionsForJobStatusEnumTimedOut   ListJobExecutionsForJobStatusEnum = "TIMED_OUT"
	ListJobExecutionsForJobStatusEnumRejected   ListJobExecutionsForJobStatusEnum = "REJECTED"
	ListJobExecutionsForJobStatusEnumRemoved    ListJobExecutionsForJobStatusEnum = "REMOVED"
	ListJobExecutionsForJobStatusEnumCanceled   ListJobExecutionsForJobStatusEnum = "CANCELED"
)

type ListJobExecutionsForJobQueryParams struct {
	MaxResults *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=nextToken"`
	Status     *ListJobExecutionsForJobStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type ListJobExecutionsForJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListJobExecutionsForJobRequest struct {
	PathParams  ListJobExecutionsForJobPathParams
	QueryParams ListJobExecutionsForJobQueryParams
	Headers     ListJobExecutionsForJobHeaders
}

type ListJobExecutionsForJobResponse struct {
	ContentType                     string
	InvalidRequestException         *interface{}
	ListJobExecutionsForJobResponse *shared.ListJobExecutionsForJobResponse
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
