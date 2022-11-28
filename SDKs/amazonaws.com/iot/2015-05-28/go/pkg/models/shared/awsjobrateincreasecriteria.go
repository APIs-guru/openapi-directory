package shared

// AwsJobRateIncreaseCriteria
// The criteria to initiate the increase in rate of rollout for a job.
type AwsJobRateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings,omitempty"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings,omitempty"`
}
