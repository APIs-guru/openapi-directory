package shared

type JobStatusEnum string

const (
	JobStatusEnumPending    JobStatusEnum = "pending"
	JobStatusEnumRunning    JobStatusEnum = "running"
	JobStatusEnumIncomplete JobStatusEnum = "incomplete"
	JobStatusEnumFailed     JobStatusEnum = "failed"
	JobStatusEnumSucceeded  JobStatusEnum = "succeeded"
	JobStatusEnumCancelled  JobStatusEnum = "cancelled"
)
