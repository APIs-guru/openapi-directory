package shared

type JobStatusEnum string

const (
	JobStatusEnumSubmitted JobStatusEnum = "SUBMITTED"
	JobStatusEnumPending   JobStatusEnum = "PENDING"
	JobStatusEnumRunnable  JobStatusEnum = "RUNNABLE"
	JobStatusEnumStarting  JobStatusEnum = "STARTING"
	JobStatusEnumRunning   JobStatusEnum = "RUNNING"
	JobStatusEnumSucceeded JobStatusEnum = "SUCCEEDED"
	JobStatusEnumFailed    JobStatusEnum = "FAILED"
)
