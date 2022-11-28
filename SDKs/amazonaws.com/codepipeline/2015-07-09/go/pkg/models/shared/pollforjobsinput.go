package shared

// PollForJobsInput
// Represents the input of a <code>PollForJobs</code> action.
type PollForJobsInput struct {
	ActionTypeID ActionTypeID      `json:"actionTypeId"`
	MaxBatchSize *int64            `json:"maxBatchSize,omitempty"`
	QueryParam   map[string]string `json:"queryParam,omitempty"`
}
