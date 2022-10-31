package shared

type StartUserImportJobRequest struct {
	JobID      string `json:"JobId"`
	UserPoolID string `json:"UserPoolId"`
}
