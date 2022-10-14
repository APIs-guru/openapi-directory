package shared

type PollForJobsOutput struct {
	Jobs []Job `json:"jobs,omitempty"`
}
