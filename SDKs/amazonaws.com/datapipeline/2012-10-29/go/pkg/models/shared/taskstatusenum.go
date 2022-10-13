package shared

type TaskStatusEnum string

const (
	TaskStatusEnumFinished TaskStatusEnum = "FINISHED"
	TaskStatusEnumFailed   TaskStatusEnum = "FAILED"
	TaskStatusEnumFalse    TaskStatusEnum = "FALSE"
)
