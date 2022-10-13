package shared

type ConformancePackStateEnum string

const (
	ConformancePackStateEnumCreateInProgress ConformancePackStateEnum = "CREATE_IN_PROGRESS"
	ConformancePackStateEnumCreateComplete   ConformancePackStateEnum = "CREATE_COMPLETE"
	ConformancePackStateEnumCreateFailed     ConformancePackStateEnum = "CREATE_FAILED"
	ConformancePackStateEnumDeleteInProgress ConformancePackStateEnum = "DELETE_IN_PROGRESS"
	ConformancePackStateEnumDeleteFailed     ConformancePackStateEnum = "DELETE_FAILED"
)
