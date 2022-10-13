package shared

type ReportStatusEnum string

const (
	ReportStatusEnumWorkInProgress ReportStatusEnum = "WORK_IN_PROGRESS"
	ReportStatusEnumFailed         ReportStatusEnum = "FAILED"
	ReportStatusEnumCompleted      ReportStatusEnum = "COMPLETED"
)
