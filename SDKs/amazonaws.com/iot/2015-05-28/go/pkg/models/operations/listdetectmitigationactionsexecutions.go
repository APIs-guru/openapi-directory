package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDetectMitigationActionsExecutionsQueryParams struct {
	EndTime     *time.Time `queryParam:"style=form,explode=true,name=endTime"`
	MaxResults  *int64     `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken   *string    `queryParam:"style=form,explode=true,name=nextToken"`
	StartTime   *time.Time `queryParam:"style=form,explode=true,name=startTime"`
	TaskID      *string    `queryParam:"style=form,explode=true,name=taskId"`
	ThingName   *string    `queryParam:"style=form,explode=true,name=thingName"`
	ViolationID *string    `queryParam:"style=form,explode=true,name=violationId"`
}

type ListDetectMitigationActionsExecutionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDetectMitigationActionsExecutionsRequest struct {
	QueryParams ListDetectMitigationActionsExecutionsQueryParams
	Headers     ListDetectMitigationActionsExecutionsHeaders
}

type ListDetectMitigationActionsExecutionsResponse struct {
	ContentType                                   string
	InternalFailureException                      *interface{}
	InvalidRequestException                       *interface{}
	ListDetectMitigationActionsExecutionsResponse *shared.ListDetectMitigationActionsExecutionsResponse
	StatusCode                                    int64
	ThrottlingException                           *interface{}
}
