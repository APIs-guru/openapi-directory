package shared

// StartUserImportJobResponse
// Represents the response from the server to the request to start the user import job.
type StartUserImportJobResponse struct {
	UserImportJob *UserImportJobType `json:"UserImportJob,omitempty"`
}
