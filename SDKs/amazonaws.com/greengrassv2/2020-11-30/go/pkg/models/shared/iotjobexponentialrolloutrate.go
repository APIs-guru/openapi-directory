package shared

type IoTJobExponentialRolloutRate struct {
	BaseRatePerMinute    int64                      `json:"baseRatePerMinute"`
	IncrementFactor      float64                    `json:"incrementFactor"`
	RateIncreaseCriteria IoTJobRateIncreaseCriteria `json:"rateIncreaseCriteria"`
}
