package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagePackagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImagePackagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListImagePackagesRequestBody struct {
	ImageBuildVersionArn string  `json:"imageBuildVersionArn"`
	MaxResults           *int64  `json:"maxResults,omitempty"`
	NextToken            *string `json:"nextToken,omitempty"`
}

type ListImagePackagesRequest struct {
	QueryParams ListImagePackagesQueryParams
	Headers     ListImagePackagesHeaders
	Request     ListImagePackagesRequestBody `request:"mediaType=application/json"`
}

type ListImagePackagesResponse struct {
	CallRateLimitExceededException  *interface{}
	ClientException                 *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	InvalidPaginationTokenException *interface{}
	InvalidRequestException         *interface{}
	ListImagePackagesResponse       *shared.ListImagePackagesResponse
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
}
