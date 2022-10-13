package shared

import (
	"time"
)

type AuditMitigationActionExecutionMetadata struct {
	ActionID   *string                                    `json:"actionId"`
	ActionName *string                                    `json:"actionName"`
	EndTime    *time.Time                                 `json:"endTime"`
	ErrorCode  *string                                    `json:"errorCode"`
	FindingID  *string                                    `json:"findingId"`
	Message    *string                                    `json:"message"`
	StartTime  *time.Time                                 `json:"startTime"`
	Status     *AuditMitigationActionsExecutionStatusEnum `json:"status"`
	TaskID     *string                                    `json:"taskId"`
}
