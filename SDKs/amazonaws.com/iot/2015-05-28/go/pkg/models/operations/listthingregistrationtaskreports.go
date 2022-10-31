package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingRegistrationTaskReportsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type ListThingRegistrationTaskReportsReportTypeEnum string

const (
	ListThingRegistrationTaskReportsReportTypeEnumErrors  ListThingRegistrationTaskReportsReportTypeEnum = "ERRORS"
	ListThingRegistrationTaskReportsReportTypeEnumResults ListThingRegistrationTaskReportsReportTypeEnum = "RESULTS"
)

type ListThingRegistrationTaskReportsQueryParams struct {
	MaxResults *int64                                         `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                                        `queryParam:"style=form,explode=true,name=nextToken"`
	ReportType ListThingRegistrationTaskReportsReportTypeEnum `queryParam:"style=form,explode=true,name=reportType"`
}

type ListThingRegistrationTaskReportsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListThingRegistrationTaskReportsRequest struct {
	PathParams  ListThingRegistrationTaskReportsPathParams
	QueryParams ListThingRegistrationTaskReportsQueryParams
	Headers     ListThingRegistrationTaskReportsHeaders
}

type ListThingRegistrationTaskReportsResponse struct {
	ContentType                              string
	InternalFailureException                 *interface{}
	InvalidRequestException                  *interface{}
	ListThingRegistrationTaskReportsResponse *shared.ListThingRegistrationTaskReportsResponse
	StatusCode                               int64
	ThrottlingException                      *interface{}
	UnauthorizedException                    *interface{}
}
