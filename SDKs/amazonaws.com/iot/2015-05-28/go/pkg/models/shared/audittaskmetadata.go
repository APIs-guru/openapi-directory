package shared

// AuditTaskMetadata
// The audits that were performed.
type AuditTaskMetadata struct {
	TaskID     *string              `json:"taskId,omitempty"`
	TaskStatus *AuditTaskStatusEnum `json:"taskStatus,omitempty"`
	TaskType   *AuditTaskTypeEnum   `json:"taskType,omitempty"`
}
