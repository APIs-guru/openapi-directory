package operations

import (
	"openapi/pkg/models/shared"
)

type ListComponentBuildVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListComponentBuildVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListComponentBuildVersionsRequestBody struct {
	ComponentVersionArn string  `json:"componentVersionArn"`
	MaxResults          *int64  `json:"maxResults,omitempty"`
	NextToken           *string `json:"nextToken,omitempty"`
}

type ListComponentBuildVersionsRequest struct {
	QueryParams ListComponentBuildVersionsQueryParams
	Headers     ListComponentBuildVersionsHeaders
	Request     ListComponentBuildVersionsRequestBody `request:"mediaType=application/json"`
}

type ListComponentBuildVersionsResponse struct {
	CallRateLimitExceededException     *interface{}
	ClientException                    *interface{}
	ContentType                        string
	ForbiddenException                 *interface{}
	InvalidPaginationTokenException    *interface{}
	InvalidRequestException            *interface{}
	ListComponentBuildVersionsResponse *shared.ListComponentBuildVersionsResponse
	ServiceException                   *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
}
