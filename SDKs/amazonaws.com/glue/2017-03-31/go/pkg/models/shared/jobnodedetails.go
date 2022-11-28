package shared

// JobNodeDetails
// The details of a Job node present in the workflow.
type JobNodeDetails struct {
	JobRuns []JobRun `json:"JobRuns,omitempty"`
}
