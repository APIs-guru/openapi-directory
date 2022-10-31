package shared

type ModifyReportDefinitionRequest struct {
	ReportDefinition ReportDefinition `json:"ReportDefinition"`
	ReportName       string           `json:"ReportName"`
}
