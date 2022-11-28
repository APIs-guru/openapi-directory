package shared

import (
	"time"
)

// AuditMitigationActionExecutionMetadata
// Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
type AuditMitigationActionExecutionMetadata struct {
	ActionID   *string                                    `json:"actionId,omitempty"`
	ActionName *string                                    `json:"actionName,omitempty"`
	EndTime    *time.Time                                 `json:"endTime,omitempty"`
	ErrorCode  *string                                    `json:"errorCode,omitempty"`
	FindingID  *string                                    `json:"findingId,omitempty"`
	Message    *string                                    `json:"message,omitempty"`
	StartTime  *time.Time                                 `json:"startTime,omitempty"`
	Status     *AuditMitigationActionsExecutionStatusEnum `json:"status,omitempty"`
	TaskID     *string                                    `json:"taskId,omitempty"`
}
