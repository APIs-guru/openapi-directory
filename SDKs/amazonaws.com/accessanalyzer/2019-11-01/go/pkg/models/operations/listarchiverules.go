package operations

import (
	"openapi/pkg/models/shared"
)

type ListArchiveRulesPathParams struct {
	AnalyzerName string `pathParam:"style=simple,explode=false,name=analyzerName"`
}

type ListArchiveRulesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListArchiveRulesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListArchiveRulesRequest struct {
	PathParams  ListArchiveRulesPathParams
	QueryParams ListArchiveRulesQueryParams
	Headers     ListArchiveRulesHeaders
}

type ListArchiveRulesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServerException  *interface{}
	ListArchiveRulesResponse *shared.ListArchiveRulesResponse
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
