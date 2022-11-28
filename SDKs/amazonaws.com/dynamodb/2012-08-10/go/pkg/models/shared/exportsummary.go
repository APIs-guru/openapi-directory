package shared

// ExportSummary
// Summary information about an export task.
type ExportSummary struct {
	ExportArn    *string           `json:"ExportArn,omitempty"`
	ExportStatus *ExportStatusEnum `json:"ExportStatus,omitempty"`
}
