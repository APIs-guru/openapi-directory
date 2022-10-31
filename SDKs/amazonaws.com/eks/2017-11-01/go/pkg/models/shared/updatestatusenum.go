package shared

type UpdateStatusEnum string

const (
	UpdateStatusEnumInProgress UpdateStatusEnum = "InProgress"
	UpdateStatusEnumFailed     UpdateStatusEnum = "Failed"
	UpdateStatusEnumCancelled  UpdateStatusEnum = "Cancelled"
	UpdateStatusEnumSuccessful UpdateStatusEnum = "Successful"
)
