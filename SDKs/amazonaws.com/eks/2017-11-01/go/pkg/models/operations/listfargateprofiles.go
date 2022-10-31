package operations

import (
	"openapi/pkg/models/shared"
)

type ListFargateProfilesPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ListFargateProfilesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFargateProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListFargateProfilesRequest struct {
	PathParams  ListFargateProfilesPathParams
	QueryParams ListFargateProfilesQueryParams
	Headers     ListFargateProfilesHeaders
}

type ListFargateProfilesResponse struct {
	ClientException             *interface{}
	ContentType                 string
	InvalidParameterException   *interface{}
	ListFargateProfilesResponse *shared.ListFargateProfilesResponse
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	StatusCode                  int64
}
