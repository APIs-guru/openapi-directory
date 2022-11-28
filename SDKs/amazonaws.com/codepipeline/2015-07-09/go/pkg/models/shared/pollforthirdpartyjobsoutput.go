package shared

// PollForThirdPartyJobsOutput
// Represents the output of a <code>PollForThirdPartyJobs</code> action.
type PollForThirdPartyJobsOutput struct {
	Jobs []ThirdPartyJob `json:"jobs,omitempty"`
}
