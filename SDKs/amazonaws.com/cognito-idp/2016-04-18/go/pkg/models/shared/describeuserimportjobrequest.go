package shared

type DescribeUserImportJobRequest struct {
	JobID      string `json:"JobId"`
	UserPoolID string `json:"UserPoolId"`
}
