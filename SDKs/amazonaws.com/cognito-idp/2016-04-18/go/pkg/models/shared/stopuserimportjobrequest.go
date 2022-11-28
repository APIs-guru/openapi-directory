package shared

// StopUserImportJobRequest
// Represents the request to stop the user import job.
type StopUserImportJobRequest struct {
	JobID      string `json:"JobId"`
	UserPoolID string `json:"UserPoolId"`
}
