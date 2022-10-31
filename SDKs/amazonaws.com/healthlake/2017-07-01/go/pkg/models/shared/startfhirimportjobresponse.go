package shared

type StartFhirImportJobResponse struct {
	DatastoreID *string       `json:"DatastoreId,omitempty"`
	JobID       string        `json:"JobId"`
	JobStatus   JobStatusEnum `json:"JobStatus"`
}
