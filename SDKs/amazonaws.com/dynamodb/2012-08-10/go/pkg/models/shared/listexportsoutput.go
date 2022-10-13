package shared

type ListExportsOutput struct {
	ExportSummaries []ExportSummary `json:"ExportSummaries"`
	NextToken       *string         `json:"NextToken"`
}
