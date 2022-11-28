package shared

// CreateUserImportJobRequest
// Represents the request to create the user import job.
type CreateUserImportJobRequest struct {
	CloudWatchLogsRoleArn string `json:"CloudWatchLogsRoleArn"`
	JobName               string `json:"JobName"`
	UserPoolID            string `json:"UserPoolId"`
}
