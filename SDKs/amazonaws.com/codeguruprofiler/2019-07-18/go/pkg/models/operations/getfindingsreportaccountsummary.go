package operations

import (
	"openapi/pkg/models/shared"
)

type GetFindingsReportAccountSummaryQueryParams struct {
	DailyReportsOnly *bool   `queryParam:"style=form,explode=true,name=dailyReportsOnly"`
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken        *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetFindingsReportAccountSummaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFindingsReportAccountSummaryRequest struct {
	QueryParams GetFindingsReportAccountSummaryQueryParams
	Headers     GetFindingsReportAccountSummaryHeaders
}

type GetFindingsReportAccountSummaryResponse struct {
	ContentType                             string
	GetFindingsReportAccountSummaryResponse *shared.GetFindingsReportAccountSummaryResponse
	InternalServerException                 *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	ValidationException                     *interface{}
}
