package shared

type StatusEnum string

const (
	StatusEnumInProgress StatusEnum = "InProgress"
	StatusEnumCompleted  StatusEnum = "Completed"
	StatusEnumFailed     StatusEnum = "Failed"
	StatusEnumCancelled  StatusEnum = "Cancelled"
	StatusEnumCancelling StatusEnum = "Cancelling"
)
