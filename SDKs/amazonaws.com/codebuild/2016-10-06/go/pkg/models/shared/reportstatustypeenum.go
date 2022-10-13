package shared

type ReportStatusTypeEnum string

const (
	ReportStatusTypeEnumGenerating ReportStatusTypeEnum = "GENERATING"
	ReportStatusTypeEnumSucceeded  ReportStatusTypeEnum = "SUCCEEDED"
	ReportStatusTypeEnumFailed     ReportStatusTypeEnum = "FAILED"
	ReportStatusTypeEnumIncomplete ReportStatusTypeEnum = "INCOMPLETE"
	ReportStatusTypeEnumDeleting   ReportStatusTypeEnum = "DELETING"
)
