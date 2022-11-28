package shared

// PollForThirdPartyJobsInput
// Represents the input of a <code>PollForThirdPartyJobs</code> action.
type PollForThirdPartyJobsInput struct {
	ActionTypeID ActionTypeID `json:"actionTypeId"`
	MaxBatchSize *int64       `json:"maxBatchSize,omitempty"`
}
