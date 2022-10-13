package operations

import (
	"openapi/pkg/models/shared"
)

type ListBranchesPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type ListBranchesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBranchesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBranchesRequest struct {
	PathParams  ListBranchesPathParams
	QueryParams ListBranchesQueryParams
	Headers     ListBranchesHeaders
}

type ListBranchesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	ListBranchesResult       *shared.ListBranchesResult
	StatusCode               int64
	UnauthorizedException    *interface{}
}
