package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAuditTasksTaskStatusEnum string

const (
	ListAuditTasksTaskStatusEnumInProgress ListAuditTasksTaskStatusEnum = "IN_PROGRESS"
	ListAuditTasksTaskStatusEnumCompleted  ListAuditTasksTaskStatusEnum = "COMPLETED"
	ListAuditTasksTaskStatusEnumFailed     ListAuditTasksTaskStatusEnum = "FAILED"
	ListAuditTasksTaskStatusEnumCanceled   ListAuditTasksTaskStatusEnum = "CANCELED"
)

type ListAuditTasksTaskTypeEnum string

const (
	ListAuditTasksTaskTypeEnumOnDemandAuditTask  ListAuditTasksTaskTypeEnum = "ON_DEMAND_AUDIT_TASK"
	ListAuditTasksTaskTypeEnumScheduledAuditTask ListAuditTasksTaskTypeEnum = "SCHEDULED_AUDIT_TASK"
)

type ListAuditTasksQueryParams struct {
	EndTime    time.Time                     `queryParam:"style=form,explode=true,name=endTime"`
	MaxResults *int64                        `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                       `queryParam:"style=form,explode=true,name=nextToken"`
	StartTime  time.Time                     `queryParam:"style=form,explode=true,name=startTime"`
	TaskStatus *ListAuditTasksTaskStatusEnum `queryParam:"style=form,explode=true,name=taskStatus"`
	TaskType   *ListAuditTasksTaskTypeEnum   `queryParam:"style=form,explode=true,name=taskType"`
}

type ListAuditTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAuditTasksRequest struct {
	QueryParams ListAuditTasksQueryParams
	Headers     ListAuditTasksHeaders
}

type ListAuditTasksResponse struct {
	ContentType              string
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	ListAuditTasksResponse   *shared.ListAuditTasksResponse
	StatusCode               int64
	ThrottlingException      *interface{}
}
