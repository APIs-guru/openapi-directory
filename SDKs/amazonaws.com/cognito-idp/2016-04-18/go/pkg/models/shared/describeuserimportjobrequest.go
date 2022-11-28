package shared

// DescribeUserImportJobRequest
// Represents the request to describe the user import job.
type DescribeUserImportJobRequest struct {
	JobID      string `json:"JobId"`
	UserPoolID string `json:"UserPoolId"`
}
