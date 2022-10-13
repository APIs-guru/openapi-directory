package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlacementsPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
}

type ListPlacementsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPlacementsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPlacementsRequest struct {
	PathParams  ListPlacementsPathParams
	QueryParams ListPlacementsQueryParams
	Headers     ListPlacementsHeaders
}

type ListPlacementsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListPlacementsResponse    *shared.ListPlacementsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
