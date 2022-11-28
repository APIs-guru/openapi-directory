package shared

// PollForJobsOutput
// Represents the output of a <code>PollForJobs</code> action.
type PollForJobsOutput struct {
	Jobs []Job `json:"jobs,omitempty"`
}
