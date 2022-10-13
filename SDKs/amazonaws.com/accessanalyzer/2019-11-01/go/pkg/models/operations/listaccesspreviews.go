package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccessPreviewsQueryParams struct {
	AnalyzerArn string  `queryParam:"style=form,explode=true,name=analyzerArn"`
	MaxResults  *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken   *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAccessPreviewsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAccessPreviewsRequest struct {
	QueryParams ListAccessPreviewsQueryParams
	Headers     ListAccessPreviewsHeaders
}

type ListAccessPreviewsResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListAccessPreviewsResponse *shared.ListAccessPreviewsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
