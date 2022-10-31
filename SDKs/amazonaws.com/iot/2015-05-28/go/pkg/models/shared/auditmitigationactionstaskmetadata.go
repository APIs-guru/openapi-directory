package shared

import (
	"time"
)

type AuditMitigationActionsTaskMetadata struct {
	StartTime  *time.Time                            `json:"startTime,omitempty"`
	TaskID     *string                               `json:"taskId,omitempty"`
	TaskStatus *AuditMitigationActionsTaskStatusEnum `json:"taskStatus,omitempty"`
}
