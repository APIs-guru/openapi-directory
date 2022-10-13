package operations

import (
	"openapi/pkg/models/shared"
)

type ListKeyPhrasesDetectionJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListKeyPhrasesDetectionJobsXAmzTargetEnum string

const (
	ListKeyPhrasesDetectionJobsXAmzTargetEnumComprehend20171127ListKeyPhrasesDetectionJobs ListKeyPhrasesDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
)

type ListKeyPhrasesDetectionJobsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListKeyPhrasesDetectionJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListKeyPhrasesDetectionJobsRequest struct {
	QueryParams ListKeyPhrasesDetectionJobsQueryParams
	Headers     ListKeyPhrasesDetectionJobsHeaders
	Request     shared.ListKeyPhrasesDetectionJobsRequest `request:"mediaType=application/json"`
}

type ListKeyPhrasesDetectionJobsResponse struct {
	ContentType                         string
	InternalServerException             *interface{}
	InvalidFilterException              *interface{}
	InvalidRequestException             *interface{}
	ListKeyPhrasesDetectionJobsResponse *shared.ListKeyPhrasesDetectionJobsResponse
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
