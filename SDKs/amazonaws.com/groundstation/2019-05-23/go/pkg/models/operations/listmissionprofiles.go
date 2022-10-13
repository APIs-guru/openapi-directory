package operations

import (
	"openapi/pkg/models/shared"
)

type ListMissionProfilesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListMissionProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListMissionProfilesRequest struct {
	QueryParams ListMissionProfilesQueryParams
	Headers     ListMissionProfilesHeaders
}

type ListMissionProfilesResponse struct {
	ContentType                 string
	DependencyException         *interface{}
	InvalidParameterException   *interface{}
	ListMissionProfilesResponse *shared.ListMissionProfilesResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
