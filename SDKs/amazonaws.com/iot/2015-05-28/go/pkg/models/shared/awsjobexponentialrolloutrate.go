package shared



type AwsJobExponentialRolloutRate struct {
    BaseRatePerMinute int64 `json:"baseRatePerMinute"`
    IncrementFactor float64 `json:"incrementFactor"`
    RateIncreaseCriteria AwsJobRateIncreaseCriteria `json:"rateIncreaseCriteria"`
    
}

