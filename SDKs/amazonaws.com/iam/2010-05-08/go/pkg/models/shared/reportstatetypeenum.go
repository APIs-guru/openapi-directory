package shared

type ReportStateTypeEnum string

const (
	ReportStateTypeEnumStarted    ReportStateTypeEnum = "STARTED"
	ReportStateTypeEnumInprogress ReportStateTypeEnum = "INPROGRESS"
	ReportStateTypeEnumComplete   ReportStateTypeEnum = "COMPLETE"
)
