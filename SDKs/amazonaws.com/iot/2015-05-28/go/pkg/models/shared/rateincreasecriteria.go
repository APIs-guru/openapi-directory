package shared

// RateIncreaseCriteria
// Allows you to define a criteria to initiate the increase in rate of rollout for a job.
type RateIncreaseCriteria struct {
	NumberOfNotifiedThings  *int64 `json:"numberOfNotifiedThings,omitempty"`
	NumberOfSucceededThings *int64 `json:"numberOfSucceededThings,omitempty"`
}
