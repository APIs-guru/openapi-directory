package shared



type HealthCheckConfiguration struct {
    HealthyThreshold *int64 `json:"HealthyThreshold,omitempty"`
    Interval *int64 `json:"Interval,omitempty"`
    Path *string `json:"Path,omitempty"`
    Protocol *HealthCheckProtocolEnum `json:"Protocol,omitempty"`
    Timeout *int64 `json:"Timeout,omitempty"`
    UnhealthyThreshold *int64 `json:"UnhealthyThreshold,omitempty"`
    
}

