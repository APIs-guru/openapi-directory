package shared

type StartFhirExportJobResponse struct {
	DatastoreID *string       `json:"DatastoreId,omitempty"`
	JobID       string        `json:"JobId"`
	JobStatus   JobStatusEnum `json:"JobStatus"`
}
