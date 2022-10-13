package shared

type ApplicationStatusEnum string

const (
	ApplicationStatusEnumNotStarted ApplicationStatusEnum = "NOT_STARTED"
	ApplicationStatusEnumInProgress ApplicationStatusEnum = "IN_PROGRESS"
	ApplicationStatusEnumCompleted  ApplicationStatusEnum = "COMPLETED"
)
