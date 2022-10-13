package shared

type JobStatusEnum string

const (
	JobStatusEnumQueued     JobStatusEnum = "Queued"
	JobStatusEnumInProgress JobStatusEnum = "InProgress"
	JobStatusEnumComplete   JobStatusEnum = "Complete"
	JobStatusEnumFailed     JobStatusEnum = "Failed"
)
