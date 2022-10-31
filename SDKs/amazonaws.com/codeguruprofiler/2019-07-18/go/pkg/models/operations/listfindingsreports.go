package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListFindingsReportsPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type ListFindingsReportsQueryParams struct {
	DailyReportsOnly *bool     `queryParam:"style=form,explode=true,name=dailyReportsOnly"`
	EndTime          time.Time `queryParam:"style=form,explode=true,name=endTime"`
	MaxResults       *int64    `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken        *string   `queryParam:"style=form,explode=true,name=nextToken"`
	StartTime        time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type ListFindingsReportsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListFindingsReportsRequest struct {
	PathParams  ListFindingsReportsPathParams
	QueryParams ListFindingsReportsQueryParams
	Headers     ListFindingsReportsHeaders
}

type ListFindingsReportsResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	ListFindingsReportsResponse *shared.ListFindingsReportsResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
