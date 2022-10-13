package shared

type MonitorErrorCodeEnum string

const (
	MonitorErrorCodeEnumInternalFailure MonitorErrorCodeEnum = "INTERNAL_FAILURE"
	MonitorErrorCodeEnumValidationError MonitorErrorCodeEnum = "VALIDATION_ERROR"
	MonitorErrorCodeEnumLimitExceeded   MonitorErrorCodeEnum = "LIMIT_EXCEEDED"
)
