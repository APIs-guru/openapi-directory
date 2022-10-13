package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventsDetectionJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEventsDetectionJobsXAmzTargetEnum string

const (
	ListEventsDetectionJobsXAmzTargetEnumComprehend20171127ListEventsDetectionJobs ListEventsDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListEventsDetectionJobs"
)

type ListEventsDetectionJobsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEventsDetectionJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEventsDetectionJobsRequest struct {
	QueryParams ListEventsDetectionJobsQueryParams
	Headers     ListEventsDetectionJobsHeaders
	Request     shared.ListEventsDetectionJobsRequest `request:"mediaType=application/json"`
}

type ListEventsDetectionJobsResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidFilterException          *interface{}
	InvalidRequestException         *interface{}
	ListEventsDetectionJobsResponse *shared.ListEventsDetectionJobsResponse
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
