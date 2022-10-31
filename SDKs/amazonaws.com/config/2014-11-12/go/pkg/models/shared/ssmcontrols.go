package shared



type SsmControls struct {
    ConcurrentExecutionRatePercentage *int64 `json:"ConcurrentExecutionRatePercentage,omitempty"`
    ErrorPercentage *int64 `json:"ErrorPercentage,omitempty"`
    
}

