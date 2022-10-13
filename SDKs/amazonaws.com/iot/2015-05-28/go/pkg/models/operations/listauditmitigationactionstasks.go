package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAuditMitigationActionsTasksTaskStatusEnum string

const (
	ListAuditMitigationActionsTasksTaskStatusEnumInProgress ListAuditMitigationActionsTasksTaskStatusEnum = "IN_PROGRESS"
	ListAuditMitigationActionsTasksTaskStatusEnumCompleted  ListAuditMitigationActionsTasksTaskStatusEnum = "COMPLETED"
	ListAuditMitigationActionsTasksTaskStatusEnumFailed     ListAuditMitigationActionsTasksTaskStatusEnum = "FAILED"
	ListAuditMitigationActionsTasksTaskStatusEnumCanceled   ListAuditMitigationActionsTasksTaskStatusEnum = "CANCELED"
)

type ListAuditMitigationActionsTasksQueryParams struct {
	AuditTaskID *string                                        `queryParam:"style=form,explode=true,name=auditTaskId"`
	EndTime     time.Time                                      `queryParam:"style=form,explode=true,name=endTime"`
	FindingID   *string                                        `queryParam:"style=form,explode=true,name=findingId"`
	MaxResults  *int64                                         `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken   *string                                        `queryParam:"style=form,explode=true,name=nextToken"`
	StartTime   time.Time                                      `queryParam:"style=form,explode=true,name=startTime"`
	TaskStatus  *ListAuditMitigationActionsTasksTaskStatusEnum `queryParam:"style=form,explode=true,name=taskStatus"`
}

type ListAuditMitigationActionsTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAuditMitigationActionsTasksRequest struct {
	QueryParams ListAuditMitigationActionsTasksQueryParams
	Headers     ListAuditMitigationActionsTasksHeaders
}

type ListAuditMitigationActionsTasksResponse struct {
	ContentType                             string
	InternalFailureException                *interface{}
	InvalidRequestException                 *interface{}
	ListAuditMitigationActionsTasksResponse *shared.ListAuditMitigationActionsTasksResponse
	StatusCode                              int64
	ThrottlingException                     *interface{}
}
