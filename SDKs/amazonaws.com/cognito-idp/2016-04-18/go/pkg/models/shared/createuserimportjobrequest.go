package shared

type CreateUserImportJobRequest struct {
	CloudWatchLogsRoleArn string `json:"CloudWatchLogsRoleArn"`
	JobName               string `json:"JobName"`
	UserPoolID            string `json:"UserPoolId"`
}
