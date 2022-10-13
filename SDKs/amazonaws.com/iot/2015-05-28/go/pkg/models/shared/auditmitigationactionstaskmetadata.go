package shared

import (
	"time"
)

type AuditMitigationActionsTaskMetadata struct {
	StartTime  *time.Time                            `json:"startTime"`
	TaskID     *string                               `json:"taskId"`
	TaskStatus *AuditMitigationActionsTaskStatusEnum `json:"taskStatus"`
}
