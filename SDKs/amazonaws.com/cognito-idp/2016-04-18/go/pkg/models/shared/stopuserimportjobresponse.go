package shared

// StopUserImportJobResponse
// Represents the response from the server to the request to stop the user import job.
type StopUserImportJobResponse struct {
	UserImportJob *UserImportJobType `json:"UserImportJob,omitempty"`
}
