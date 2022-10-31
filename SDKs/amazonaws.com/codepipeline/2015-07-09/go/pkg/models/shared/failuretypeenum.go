package shared

type FailureTypeEnum string

const (
	FailureTypeEnumJobFailed           FailureTypeEnum = "JobFailed"
	FailureTypeEnumConfigurationError  FailureTypeEnum = "ConfigurationError"
	FailureTypeEnumPermissionError     FailureTypeEnum = "PermissionError"
	FailureTypeEnumRevisionOutOfSync   FailureTypeEnum = "RevisionOutOfSync"
	FailureTypeEnumRevisionUnavailable FailureTypeEnum = "RevisionUnavailable"
	FailureTypeEnumSystemUnavailable   FailureTypeEnum = "SystemUnavailable"
)
