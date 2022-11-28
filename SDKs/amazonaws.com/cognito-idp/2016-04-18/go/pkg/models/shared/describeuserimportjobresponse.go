package shared

// DescribeUserImportJobResponse
// Represents the response from the server to the request to describe the user import job.
type DescribeUserImportJobResponse struct {
	UserImportJob *UserImportJobType `json:"UserImportJob,omitempty"`
}
