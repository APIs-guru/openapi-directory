package shared

type JobStatusEnum string

const (
	JobStatusEnumCreated    JobStatusEnum = "Created"
	JobStatusEnumQueued     JobStatusEnum = "Queued"
	JobStatusEnumDispatched JobStatusEnum = "Dispatched"
	JobStatusEnumInProgress JobStatusEnum = "InProgress"
	JobStatusEnumTimedOut   JobStatusEnum = "TimedOut"
	JobStatusEnumSucceeded  JobStatusEnum = "Succeeded"
	JobStatusEnumFailed     JobStatusEnum = "Failed"
)
