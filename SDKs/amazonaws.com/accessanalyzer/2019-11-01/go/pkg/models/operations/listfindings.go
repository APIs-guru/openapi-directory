package operations

import (
	"openapi/pkg/models/shared"
)

type ListFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListFindingsRequestBodySort struct {
	AttributeName *string             `json:"attributeName,omitempty"`
	OrderBy       *shared.OrderByEnum `json:"orderBy,omitempty"`
}

type ListFindingsRequestBody struct {
	AnalyzerArn string                       `json:"analyzerArn"`
	Filter      map[string]shared.Criterion  `json:"filter,omitempty"`
	MaxResults  *int64                       `json:"maxResults,omitempty"`
	NextToken   *string                      `json:"nextToken,omitempty"`
	Sort        *ListFindingsRequestBodySort `json:"sort,omitempty"`
}

type ListFindingsRequest struct {
	QueryParams ListFindingsQueryParams
	Headers     ListFindingsHeaders
	Request     ListFindingsRequestBody `request:"mediaType=application/json"`
}

type ListFindingsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListFindingsResponse      *shared.ListFindingsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
