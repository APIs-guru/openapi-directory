package shared



type AwsJobAbortCriteria struct {
    Action AwsJobAbortCriteriaAbortActionEnum `json:"action"`
    FailureType AwsJobAbortCriteriaFailureTypeEnum `json:"failureType"`
    MinNumberOfExecutedThings int64 `json:"minNumberOfExecutedThings"`
    ThresholdPercentage float64 `json:"thresholdPercentage"`
    
}

