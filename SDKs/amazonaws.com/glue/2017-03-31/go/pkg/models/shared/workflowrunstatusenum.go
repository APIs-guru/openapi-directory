package shared

type WorkflowRunStatusEnum string

const (
	WorkflowRunStatusEnumRunning   WorkflowRunStatusEnum = "RUNNING"
	WorkflowRunStatusEnumCompleted WorkflowRunStatusEnum = "COMPLETED"
	WorkflowRunStatusEnumStopping  WorkflowRunStatusEnum = "STOPPING"
	WorkflowRunStatusEnumStopped   WorkflowRunStatusEnum = "STOPPED"
	WorkflowRunStatusEnumError     WorkflowRunStatusEnum = "ERROR"
)
