package shared

type StatusTypeEnum string

const (
	StatusTypeEnumSucceeded  StatusTypeEnum = "SUCCEEDED"
	StatusTypeEnumFailed     StatusTypeEnum = "FAILED"
	StatusTypeEnumFault      StatusTypeEnum = "FAULT"
	StatusTypeEnumTimedOut   StatusTypeEnum = "TIMED_OUT"
	StatusTypeEnumInProgress StatusTypeEnum = "IN_PROGRESS"
	StatusTypeEnumStopped    StatusTypeEnum = "STOPPED"
)
