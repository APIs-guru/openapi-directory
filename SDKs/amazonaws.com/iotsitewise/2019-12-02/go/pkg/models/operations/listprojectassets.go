package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectAssetsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ListProjectAssetsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProjectAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProjectAssetsRequest struct {
	PathParams  ListProjectAssetsPathParams
	QueryParams ListProjectAssetsQueryParams
	Headers     ListProjectAssetsHeaders
}

type ListProjectAssetsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListProjectAssetsResponse *shared.ListProjectAssetsResponse
	StatusCode                int64
	ThrottlingException       *interface{}
}
