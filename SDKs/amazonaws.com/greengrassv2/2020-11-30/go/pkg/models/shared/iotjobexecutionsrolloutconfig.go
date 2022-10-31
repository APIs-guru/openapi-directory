package shared



type IoTJobExecutionsRolloutConfig struct {
    ExponentialRate *IoTJobExponentialRolloutRate `json:"exponentialRate,omitempty"`
    MaximumPerMinute *int64 `json:"maximumPerMinute,omitempty"`
    
}

