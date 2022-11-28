package shared

// IoTJobExponentialRolloutRate
// Contains information about an exponential rollout rate for a configuration deployment job.
type IoTJobExponentialRolloutRate struct {
	BaseRatePerMinute    int64                      `json:"baseRatePerMinute"`
	IncrementFactor      float64                    `json:"incrementFactor"`
	RateIncreaseCriteria IoTJobRateIncreaseCriteria `json:"rateIncreaseCriteria"`
}
