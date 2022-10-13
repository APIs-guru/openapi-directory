package shared

type StartFhirExportJobResponse struct {
	DatastoreID *string       `json:"DatastoreId"`
	JobID       string        `json:"JobId"`
	JobStatus   JobStatusEnum `json:"JobStatus"`
}
