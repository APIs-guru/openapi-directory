package shared

type StatusTypeEnum string

const (
	StatusTypeEnumPassed           StatusTypeEnum = "passed"
	StatusTypeEnumFailed           StatusTypeEnum = "failed"
	StatusTypeEnumInsufficientData StatusTypeEnum = "insufficient-data"
	StatusTypeEnumInitializing     StatusTypeEnum = "initializing"
)
