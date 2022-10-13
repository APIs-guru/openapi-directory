package shared

type ListFleetMetricsResponse struct {
	FleetMetrics []FleetMetricNameAndArn `json:"fleetMetrics"`
	NextToken    *string                 `json:"nextToken"`
}
