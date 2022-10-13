package shared

type ExportStatusEnum string

const (
	ExportStatusEnumFailed     ExportStatusEnum = "FAILED"
	ExportStatusEnumSucceeded  ExportStatusEnum = "SUCCEEDED"
	ExportStatusEnumInProgress ExportStatusEnum = "IN_PROGRESS"
)
