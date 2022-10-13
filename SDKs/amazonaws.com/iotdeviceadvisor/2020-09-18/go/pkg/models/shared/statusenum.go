package shared

type StatusEnum string

const (
	StatusEnumPass             StatusEnum = "PASS"
	StatusEnumFail             StatusEnum = "FAIL"
	StatusEnumCanceled         StatusEnum = "CANCELED"
	StatusEnumPending          StatusEnum = "PENDING"
	StatusEnumRunning          StatusEnum = "RUNNING"
	StatusEnumStopping         StatusEnum = "STOPPING"
	StatusEnumStopped          StatusEnum = "STOPPED"
	StatusEnumPassWithWarnings StatusEnum = "PASS_WITH_WARNINGS"
	StatusEnumError            StatusEnum = "ERROR"
)
