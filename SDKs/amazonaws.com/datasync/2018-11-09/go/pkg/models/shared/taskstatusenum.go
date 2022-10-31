package shared

type TaskStatusEnum string

const (
	TaskStatusEnumAvailable   TaskStatusEnum = "AVAILABLE"
	TaskStatusEnumCreating    TaskStatusEnum = "CREATING"
	TaskStatusEnumQueued      TaskStatusEnum = "QUEUED"
	TaskStatusEnumRunning     TaskStatusEnum = "RUNNING"
	TaskStatusEnumUnavailable TaskStatusEnum = "UNAVAILABLE"
)
