package shared

type StatusEnum string

const (
	StatusEnumNotStarted StatusEnum = "NOT_STARTED"
	StatusEnumInProgress StatusEnum = "IN_PROGRESS"
	StatusEnumFailed     StatusEnum = "FAILED"
	StatusEnumCompleted  StatusEnum = "COMPLETED"
)
