package shared



type ListFleetMetricsResponse struct {
    FleetMetrics []FleetMetricNameAndArn `json:"fleetMetrics,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

