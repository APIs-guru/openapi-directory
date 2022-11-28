package shared

type EventSeverityEnum string

const (
	EventSeverityEnumTrace EventSeverityEnum = "TRACE"
	EventSeverityEnumDebug EventSeverityEnum = "DEBUG"
	EventSeverityEnumInfo  EventSeverityEnum = "INFO"
	EventSeverityEnumWarn  EventSeverityEnum = "WARN"
	EventSeverityEnumError EventSeverityEnum = "ERROR"
	EventSeverityEnumFatal EventSeverityEnum = "FATAL"
)
