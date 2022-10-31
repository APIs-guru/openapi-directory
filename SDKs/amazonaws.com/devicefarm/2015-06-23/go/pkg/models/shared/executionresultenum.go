package shared

type ExecutionResultEnum string

const (
	ExecutionResultEnumPending ExecutionResultEnum = "PENDING"
	ExecutionResultEnumPassed  ExecutionResultEnum = "PASSED"
	ExecutionResultEnumWarned  ExecutionResultEnum = "WARNED"
	ExecutionResultEnumFailed  ExecutionResultEnum = "FAILED"
	ExecutionResultEnumSkipped ExecutionResultEnum = "SKIPPED"
	ExecutionResultEnumErrored ExecutionResultEnum = "ERRORED"
	ExecutionResultEnumStopped ExecutionResultEnum = "STOPPED"
)
