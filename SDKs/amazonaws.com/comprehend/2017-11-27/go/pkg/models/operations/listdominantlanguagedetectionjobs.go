package operations

import (
	"openapi/pkg/models/shared"
)

type ListDominantLanguageDetectionJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDominantLanguageDetectionJobsXAmzTargetEnum string

const (
	ListDominantLanguageDetectionJobsXAmzTargetEnumComprehend20171127ListDominantLanguageDetectionJobs ListDominantLanguageDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListDominantLanguageDetectionJobs"
)

type ListDominantLanguageDetectionJobsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDominantLanguageDetectionJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDominantLanguageDetectionJobsRequest struct {
	QueryParams ListDominantLanguageDetectionJobsQueryParams
	Headers     ListDominantLanguageDetectionJobsHeaders
	Request     shared.ListDominantLanguageDetectionJobsRequest `request:"mediaType=application/json"`
}

type ListDominantLanguageDetectionJobsResponse struct {
	ContentType                               string
	InternalServerException                   *interface{}
	InvalidFilterException                    *interface{}
	InvalidRequestException                   *interface{}
	ListDominantLanguageDetectionJobsResponse *shared.ListDominantLanguageDetectionJobsResponse
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
