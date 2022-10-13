package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type ListJobsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
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

type ListJobsRequest struct {
	PathParams  ListJobsPathParams
	QueryParams ListJobsQueryParams
	Headers     ListJobsHeaders
}

type ListJobsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	ListJobsResult           *shared.ListJobsResult
	StatusCode               int64
	UnauthorizedException    *interface{}
}
