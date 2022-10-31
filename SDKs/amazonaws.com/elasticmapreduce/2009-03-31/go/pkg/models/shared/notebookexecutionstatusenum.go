package shared

type NotebookExecutionStatusEnum string

const (
	NotebookExecutionStatusEnumStartPending NotebookExecutionStatusEnum = "START_PENDING"
	NotebookExecutionStatusEnumStarting     NotebookExecutionStatusEnum = "STARTING"
	NotebookExecutionStatusEnumRunning      NotebookExecutionStatusEnum = "RUNNING"
	NotebookExecutionStatusEnumFinishing    NotebookExecutionStatusEnum = "FINISHING"
	NotebookExecutionStatusEnumFinished     NotebookExecutionStatusEnum = "FINISHED"
	NotebookExecutionStatusEnumFailing      NotebookExecutionStatusEnum = "FAILING"
	NotebookExecutionStatusEnumFailed       NotebookExecutionStatusEnum = "FAILED"
	NotebookExecutionStatusEnumStopPending  NotebookExecutionStatusEnum = "STOP_PENDING"
	NotebookExecutionStatusEnumStopping     NotebookExecutionStatusEnum = "STOPPING"
	NotebookExecutionStatusEnumStopped      NotebookExecutionStatusEnum = "STOPPED"
)
