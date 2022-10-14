package shared

type AuditTaskMetadata struct {
	TaskID     *string              `json:"taskId,omitempty"`
	TaskStatus *AuditTaskStatusEnum `json:"taskStatus,omitempty"`
	TaskType   *AuditTaskTypeEnum   `json:"taskType,omitempty"`
}
