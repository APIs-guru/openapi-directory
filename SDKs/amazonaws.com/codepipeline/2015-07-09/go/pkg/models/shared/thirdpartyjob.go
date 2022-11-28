package shared

// ThirdPartyJob
// A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action.
type ThirdPartyJob struct {
	ClientID *string `json:"clientId,omitempty"`
	JobID    *string `json:"jobId,omitempty"`
}
