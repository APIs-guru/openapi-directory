package shared

type UpdateReportGroupInput struct {
	Arn          string              `json:"arn"`
	ExportConfig *ReportExportConfig `json:"exportConfig"`
	Tags         []Tag               `json:"tags"`
}
