package shared

type UpdateReportGroupInput struct {
	Arn          string              `json:"arn"`
	ExportConfig *ReportExportConfig `json:"exportConfig,omitempty"`
	Tags         []Tag               `json:"tags,omitempty"`
}
