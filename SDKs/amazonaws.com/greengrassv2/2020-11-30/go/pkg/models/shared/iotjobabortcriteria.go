package shared



type IoTJobAbortCriteria struct {
    Action IoTJobAbortActionEnum `json:"action"`
    FailureType IoTJobExecutionFailureTypeEnum `json:"failureType"`
    MinNumberOfExecutedThings int64 `json:"minNumberOfExecutedThings"`
    ThresholdPercentage float64 `json:"thresholdPercentage"`
    
}

