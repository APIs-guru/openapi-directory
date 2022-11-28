package shared

type DeletionTaskStatusTypeEnum string

const (
	DeletionTaskStatusTypeEnumSucceeded  DeletionTaskStatusTypeEnum = "SUCCEEDED"
	DeletionTaskStatusTypeEnumInProgress DeletionTaskStatusTypeEnum = "IN_PROGRESS"
	DeletionTaskStatusTypeEnumFailed     DeletionTaskStatusTypeEnum = "FAILED"
	DeletionTaskStatusTypeEnumNotStarted DeletionTaskStatusTypeEnum = "NOT_STARTED"
)
