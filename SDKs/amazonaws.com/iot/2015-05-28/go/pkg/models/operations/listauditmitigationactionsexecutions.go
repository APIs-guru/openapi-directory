package operations

import (
	"openapi/pkg/models/shared"
)

type ListAuditMitigationActionsExecutionsActionStatusEnum string

const (
	ListAuditMitigationActionsExecutionsActionStatusEnumInProgress ListAuditMitigationActionsExecutionsActionStatusEnum = "IN_PROGRESS"
	ListAuditMitigationActionsExecutionsActionStatusEnumCompleted  ListAuditMitigationActionsExecutionsActionStatusEnum = "COMPLETED"
	ListAuditMitigationActionsExecutionsActionStatusEnumFailed     ListAuditMitigationActionsExecutionsActionStatusEnum = "FAILED"
	ListAuditMitigationActionsExecutionsActionStatusEnumCanceled   ListAuditMitigationActionsExecutionsActionStatusEnum = "CANCELED"
	ListAuditMitigationActionsExecutionsActionStatusEnumSkipped    ListAuditMitigationActionsExecutionsActionStatusEnum = "SKIPPED"
	ListAuditMitigationActionsExecutionsActionStatusEnumPending    ListAuditMitigationActionsExecutionsActionStatusEnum = "PENDING"
)

type ListAuditMitigationActionsExecutionsQueryParams struct {
	ActionStatus *ListAuditMitigationActionsExecutionsActionStatusEnum `queryParam:"style=form,explode=true,name=actionStatus"`
	FindingID    string                                                `queryParam:"style=form,explode=true,name=findingId"`
	MaxResults   *int64                                                `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken    *string                                               `queryParam:"style=form,explode=true,name=nextToken"`
	TaskID       string                                                `queryParam:"style=form,explode=true,name=taskId"`
}

type ListAuditMitigationActionsExecutionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAuditMitigationActionsExecutionsRequest struct {
	QueryParams ListAuditMitigationActionsExecutionsQueryParams
	Headers     ListAuditMitigationActionsExecutionsHeaders
}

type ListAuditMitigationActionsExecutionsResponse struct {
	ContentType                                  string
	InternalFailureException                     *interface{}
	InvalidRequestException                      *interface{}
	ListAuditMitigationActionsExecutionsResponse *shared.ListAuditMitigationActionsExecutionsResponse
	StatusCode                                   int64
	ThrottlingException                          *interface{}
}
