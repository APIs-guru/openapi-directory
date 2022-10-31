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
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEntitiesDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
