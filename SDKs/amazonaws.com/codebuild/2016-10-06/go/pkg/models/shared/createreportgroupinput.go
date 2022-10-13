package shared

type CreateReportGroupInput struct {
	ExportConfig ReportExportConfig `json:"exportConfig"`
	Name         string             `json:"name"`
	Tags         []Tag              `json:"tags"`
	Type         ReportTypeEnum     `json:"type"`
}
