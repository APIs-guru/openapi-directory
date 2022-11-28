package shared

// AwsJobExponentialRolloutRate
// The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
type AwsJobExponentialRolloutRate struct {
	BaseRatePerMinute    int64                      `json:"baseRatePerMinute"`
	IncrementFactor      float64                    `json:"incrementFactor"`
	RateIncreaseCriteria AwsJobRateIncreaseCriteria `json:"rateIncreaseCriteria"`
}
