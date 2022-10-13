package shared

type JobFlowExecutionStateEnum string

const (
	JobFlowExecutionStateEnumStarting      JobFlowExecutionStateEnum = "STARTING"
	JobFlowExecutionStateEnumBootstrapping JobFlowExecutionStateEnum = "BOOTSTRAPPING"
	JobFlowExecutionStateEnumRunning       JobFlowExecutionStateEnum = "RUNNING"
	JobFlowExecutionStateEnumWaiting       JobFlowExecutionStateEnum = "WAITING"
	JobFlowExecutionStateEnumShuttingDown  JobFlowExecutionStateEnum = "SHUTTING_DOWN"
	JobFlowExecutionStateEnumTerminated    JobFlowExecutionStateEnum = "TERMINATED"
	JobFlowExecutionStateEnumCompleted     JobFlowExecutionStateEnum = "COMPLETED"
	JobFlowExecutionStateEnumFailed        JobFlowExecutionStateEnum = "FAILED"
)
