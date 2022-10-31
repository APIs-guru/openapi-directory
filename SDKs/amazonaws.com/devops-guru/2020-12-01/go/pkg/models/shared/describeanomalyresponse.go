package shared



type DescribeAnomalyResponse struct {
    ProactiveAnomaly *ProactiveAnomaly `json:"ProactiveAnomaly,omitempty"`
    ReactiveAnomaly *ReactiveAnomaly `json:"ReactiveAnomaly,omitempty"`
    
}

