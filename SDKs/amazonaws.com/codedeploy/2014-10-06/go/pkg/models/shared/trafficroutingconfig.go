package shared



type TrafficRoutingConfig struct {
    TimeBasedCanary *TimeBasedCanary `json:"timeBasedCanary,omitempty"`
    TimeBasedLinear *TimeBasedLinear `json:"timeBasedLinear,omitempty"`
    Type *TrafficRoutingTypeEnum `json:"type,omitempty"`
    
}

