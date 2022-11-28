package shared

// CreateUserImportJobResponse
// Represents the response from the server to the request to create the user import job.
type CreateUserImportJobResponse struct {
	UserImportJob *UserImportJobType `json:"UserImportJob,omitempty"`
}
