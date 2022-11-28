package shared

// StartUserImportJobRequest
// Represents the request to start the user import job.
type StartUserImportJobRequest struct {
	JobID      string `json:"JobId"`
	UserPoolID string `json:"UserPoolId"`
}
