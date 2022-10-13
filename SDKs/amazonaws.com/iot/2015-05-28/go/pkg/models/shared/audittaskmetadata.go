package shared

type AuditTaskMetadata struct {
	TaskID     *string              `json:"taskId"`
	TaskStatus *AuditTaskStatusEnum `json:"taskStatus"`
	TaskType   *AuditTaskTypeEnum   `json:"taskType"`
}
