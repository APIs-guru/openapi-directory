package shared

import (
	"time"
)

// AuditMitigationActionsTaskMetadata
// Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
type AuditMitigationActionsTaskMetadata struct {
	StartTime  *time.Time                            `json:"startTime,omitempty"`
	TaskID     *string                               `json:"taskId,omitempty"`
	TaskStatus *AuditMitigationActionsTaskStatusEnum `json:"taskStatus,omitempty"`
}
