package shared

type JobStatusEnum string

const (
	JobStatusEnumSubmitted           JobStatusEnum = "SUBMITTED"
	JobStatusEnumInProgress          JobStatusEnum = "IN_PROGRESS"
	JobStatusEnumCompletedWithErrors JobStatusEnum = "COMPLETED_WITH_ERRORS"
	JobStatusEnumCompleted           JobStatusEnum = "COMPLETED"
	JobStatusEnumFailed              JobStatusEnum = "FAILED"
)
