package operations

import (
	"openapi/pkg/models/shared"
)

type ListEntitiesDetectionJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEntitiesDetectionJobsXAmzTargetEnum string

const (
	ListEntitiesDetectionJobsXAmzTargetEnumComprehend20171127ListEntitiesDetectionJobs ListEntitiesDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListEntitiesDetectionJobs"
)

type ListEntitiesDetectionJobsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEntitiesDetectionJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEntitiesDetectionJobsRequest struct {
	QueryParams ListEntitiesDetectionJobsQueryParams
	Headers     ListEntitiesDetectionJobsHeaders
	Request     shared.ListEntitiesDetectionJobsRequest `request:"mediaType=application/json"`
}

type ListEntitiesDetectionJobsResponse struct {
	ContentType                       string
	InternalServerException           *interface{}
	InvalidFilterException            *interface{}
	InvalidRequestException           *interface{}
	ListEntitiesDetectionJobsResponse *shared.ListEntitiesDetectionJobsResponse
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
