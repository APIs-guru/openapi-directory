package shared

// ExponentialRolloutRate
// Allows you to create an exponential rate of rollout for a job.
type ExponentialRolloutRate struct {
	BaseRatePerMinute    int64                `json:"baseRatePerMinute"`
	IncrementFactor      float64              `json:"incrementFactor"`
	RateIncreaseCriteria RateIncreaseCriteria `json:"rateIncreaseCriteria"`
}
