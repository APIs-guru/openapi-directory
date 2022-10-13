package shared

type ExportSummary struct {
	ExportArn    *string           `json:"ExportArn"`
	ExportStatus *ExportStatusEnum `json:"ExportStatus"`
}
