package shared

type ListExportsOutput struct {
	ExportSummaries []ExportSummary `json:"ExportSummaries,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
}
