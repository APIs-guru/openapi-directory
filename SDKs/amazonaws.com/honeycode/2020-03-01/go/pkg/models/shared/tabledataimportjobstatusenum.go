package shared

type TableDataImportJobStatusEnum string

const (
	TableDataImportJobStatusEnumSubmitted  TableDataImportJobStatusEnum = "SUBMITTED"
	TableDataImportJobStatusEnumInProgress TableDataImportJobStatusEnum = "IN_PROGRESS"
	TableDataImportJobStatusEnumCompleted  TableDataImportJobStatusEnum = "COMPLETED"
	TableDataImportJobStatusEnumFailed     TableDataImportJobStatusEnum = "FAILED"
)
