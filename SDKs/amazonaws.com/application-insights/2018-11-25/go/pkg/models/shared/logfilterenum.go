package shared

type LogFilterEnum string

const (
	LogFilterEnumError LogFilterEnum = "ERROR"
	LogFilterEnumWarn  LogFilterEnum = "WARN"
	LogFilterEnumInfo  LogFilterEnum = "INFO"
)
