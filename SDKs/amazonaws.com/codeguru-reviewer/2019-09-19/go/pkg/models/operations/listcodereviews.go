package operations

import (
	"openapi/pkg/models/shared"
)

type ListCodeReviewsTypeEnum string

const (
	ListCodeReviewsTypeEnumPullRequest        ListCodeReviewsTypeEnum = "PullRequest"
	ListCodeReviewsTypeEnumRepositoryAnalysis ListCodeReviewsTypeEnum = "RepositoryAnalysis"
)

type ListCodeReviewsQueryParams struct {
	MaxResults      *int64                    `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken       *string                   `queryParam:"style=form,explode=true,name=NextToken"`
	ProviderTypes   []shared.ProviderTypeEnum `queryParam:"style=form,explode=true,name=ProviderTypes"`
	RepositoryNames []string                  `queryParam:"style=form,explode=true,name=RepositoryNames"`
	States          []shared.JobStateEnum     `queryParam:"style=form,explode=true,name=States"`
	Type            ListCodeReviewsTypeEnum   `queryParam:"style=form,explode=true,name=Type"`
}

type ListCodeReviewsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListCodeReviewsRequest struct {
	QueryParams ListCodeReviewsQueryParams
	Headers     ListCodeReviewsHeaders
}

type ListCodeReviewsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListCodeReviewsResponse *shared.ListCodeReviewsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
