package operations

import (
	"openapi/pkg/models/shared"
)

type ListBackendJobsPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type ListBackendJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListBackendJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBackendJobsRequestBody struct {
	JobID      *string `json:"jobId"`
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
	Operation  *string `json:"operation"`
	Status     *string `json:"status"`
}

type ListBackendJobsRequest struct {
	PathParams  ListBackendJobsPathParams
	QueryParams ListBackendJobsQueryParams
	Headers     ListBackendJobsHeaders
	Request     ListBackendJobsRequestBody `request:"mediaType=application/json"`
}

type ListBackendJobsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	ListBackendJobsResponse  *shared.ListBackendJobsResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
