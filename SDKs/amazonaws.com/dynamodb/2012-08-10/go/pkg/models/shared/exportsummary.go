package shared

type ExportSummary struct {
	ExportArn    *string           `json:"ExportArn,omitempty"`
	ExportStatus *ExportStatusEnum `json:"ExportStatus,omitempty"`
}
