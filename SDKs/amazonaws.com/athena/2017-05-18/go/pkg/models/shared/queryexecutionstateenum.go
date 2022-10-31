package shared

type QueryExecutionStateEnum string

const (
	QueryExecutionStateEnumQueued    QueryExecutionStateEnum = "QUEUED"
	QueryExecutionStateEnumRunning   QueryExecutionStateEnum = "RUNNING"
	QueryExecutionStateEnumSucceeded QueryExecutionStateEnum = "SUCCEEDED"
	QueryExecutionStateEnumFailed    QueryExecutionStateEnum = "FAILED"
	QueryExecutionStateEnumCancelled QueryExecutionStateEnum = "CANCELLED"
)
