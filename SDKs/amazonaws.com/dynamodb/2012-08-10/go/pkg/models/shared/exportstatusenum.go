package shared

type ExportStatusEnum string

const (
	ExportStatusEnumInProgress ExportStatusEnum = "IN_PROGRESS"
	ExportStatusEnumCompleted  ExportStatusEnum = "COMPLETED"
	ExportStatusEnumFailed     ExportStatusEnum = "FAILED"
)
