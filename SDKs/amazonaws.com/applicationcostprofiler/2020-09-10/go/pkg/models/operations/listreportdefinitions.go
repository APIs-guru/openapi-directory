package operations

import (
	"openapi/pkg/models/shared"
)

type ListReportDefinitionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListReportDefinitionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListReportDefinitionsRequest struct {
	QueryParams ListReportDefinitionsQueryParams
	Headers     ListReportDefinitionsHeaders
}

type ListReportDefinitionsResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ListReportDefinitionsResult *shared.ListReportDefinitionsResult
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
