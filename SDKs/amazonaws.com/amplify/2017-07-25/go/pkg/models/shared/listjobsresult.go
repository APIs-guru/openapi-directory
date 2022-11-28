package shared

// ListJobsResult
//
//	The maximum number of records to list in a single response.
type ListJobsResult struct {
	JobSummaries []JobSummary `json:"jobSummaries"`
	NextToken    *string      `json:"nextToken,omitempty"`
}
