package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkspacesQueryParams struct {
	Alias      *string `queryParam:"style=form,explode=true,name=alias"`
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorkspacesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorkspacesRequest struct {
	QueryParams ListWorkspacesQueryParams
	Headers     ListWorkspacesHeaders
}

type ListWorkspacesResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListWorkspacesResponse  *shared.ListWorkspacesResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
