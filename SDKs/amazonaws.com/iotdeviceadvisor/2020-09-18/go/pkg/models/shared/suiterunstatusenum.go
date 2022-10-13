package shared

type SuiteRunStatusEnum string

const (
	SuiteRunStatusEnumPass             SuiteRunStatusEnum = "PASS"
	SuiteRunStatusEnumFail             SuiteRunStatusEnum = "FAIL"
	SuiteRunStatusEnumCanceled         SuiteRunStatusEnum = "CANCELED"
	SuiteRunStatusEnumPending          SuiteRunStatusEnum = "PENDING"
	SuiteRunStatusEnumRunning          SuiteRunStatusEnum = "RUNNING"
	SuiteRunStatusEnumStopping         SuiteRunStatusEnum = "STOPPING"
	SuiteRunStatusEnumStopped          SuiteRunStatusEnum = "STOPPED"
	SuiteRunStatusEnumPassWithWarnings SuiteRunStatusEnum = "PASS_WITH_WARNINGS"
	SuiteRunStatusEnumError            SuiteRunStatusEnum = "ERROR"
)
