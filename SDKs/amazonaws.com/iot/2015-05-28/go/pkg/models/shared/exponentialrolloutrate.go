package shared

type ExponentialRolloutRate struct {
	BaseRatePerMinute    int64                `json:"baseRatePerMinute"`
	IncrementFactor      float64              `json:"incrementFactor"`
	RateIncreaseCriteria RateIncreaseCriteria `json:"rateIncreaseCriteria"`
}
