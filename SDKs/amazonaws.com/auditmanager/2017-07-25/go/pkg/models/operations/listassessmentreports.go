package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentReportsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentReportsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAssessmentReportsRequest struct {
	QueryParams ListAssessmentReportsQueryParams
	Headers     ListAssessmentReportsHeaders
}

type ListAssessmentReportsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ListAssessmentReportsResponse *shared.ListAssessmentReportsResponse
	StatusCode                    int64
	ValidationException           *interface{}
}
