package operations

import (
	"openapi/pkg/models/shared"
)

type SearchQuantumTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchQuantumTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchQuantumTasksRequestBody struct {
	Filters    []shared.SearchQuantumTasksFilter `json:"filters"`
	MaxResults *int64                            `json:"maxResults,omitempty"`
	NextToken  *string                           `json:"nextToken,omitempty"`
}

type SearchQuantumTasksRequest struct {
	QueryParams SearchQuantumTasksQueryParams
	Headers     SearchQuantumTasksHeaders
	Request     SearchQuantumTasksRequestBody `request:"mediaType=application/json"`
}

type SearchQuantumTasksResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	SearchQuantumTasksResponse *shared.SearchQuantumTasksResponse
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
