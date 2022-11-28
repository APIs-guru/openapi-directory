package shared

type JobStatusTypeEnum string

const (
	JobStatusTypeEnumInProgress JobStatusTypeEnum = "IN_PROGRESS"
	JobStatusTypeEnumCompleted  JobStatusTypeEnum = "COMPLETED"
	JobStatusTypeEnumFailed     JobStatusTypeEnum = "FAILED"
)
