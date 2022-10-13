package shared

type StepExecutionStateEnum string

const (
	StepExecutionStateEnumPending     StepExecutionStateEnum = "PENDING"
	StepExecutionStateEnumRunning     StepExecutionStateEnum = "RUNNING"
	StepExecutionStateEnumContinue    StepExecutionStateEnum = "CONTINUE"
	StepExecutionStateEnumCompleted   StepExecutionStateEnum = "COMPLETED"
	StepExecutionStateEnumCancelled   StepExecutionStateEnum = "CANCELLED"
	StepExecutionStateEnumFailed      StepExecutionStateEnum = "FAILED"
	StepExecutionStateEnumInterrupted StepExecutionStateEnum = "INTERRUPTED"
)
