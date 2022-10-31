package shared

type StartTableDataImportJobResult struct {
	JobID     string                       `json:"jobId"`
	JobStatus TableDataImportJobStatusEnum `json:"jobStatus"`
}
