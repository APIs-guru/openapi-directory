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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
