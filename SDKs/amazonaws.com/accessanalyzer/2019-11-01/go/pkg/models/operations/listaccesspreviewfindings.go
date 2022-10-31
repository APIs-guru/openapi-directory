package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccessPreviewFindingsPathParams struct {
	AccessPreviewID string `pathParam:"style=simple,explode=false,name=accessPreviewId"`
}

type ListAccessPreviewFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAccessPreviewFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAccessPreviewFindingsRequestBody struct {
	AnalyzerArn string                      `json:"analyzerArn"`
	Filter      map[string]shared.Criterion `json:"filter,omitempty"`
	MaxResults  *int64                      `json:"maxResults,omitempty"`
	NextToken   *string                     `json:"nextToken,omitempty"`
}

type ListAccessPreviewFindingsRequest struct {
	PathParams  ListAccessPreviewFindingsPathParams
	QueryParams ListAccessPreviewFindingsQueryParams
	Headers     ListAccessPreviewFindingsHeaders
	Request     ListAccessPreviewFindingsRequestBody `request:"mediaType=application/json"`
}

type ListAccessPreviewFindingsResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	InternalServerException           *interface{}
	ListAccessPreviewFindingsResponse *shared.ListAccessPreviewFindingsResponse
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
