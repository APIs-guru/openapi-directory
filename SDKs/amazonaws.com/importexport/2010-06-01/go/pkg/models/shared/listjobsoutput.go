package shared

// ListJobsOutput
// Output structure for the ListJobs operation.
type ListJobsOutput struct {
	IsTruncated *bool
	Jobs        []Job
}
