package shared

// EndpointGroup
// A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.
type EndpointGroup struct {
	EndpointDescriptions       []EndpointDescription    `json:"EndpointDescriptions,omitempty"`
	EndpointGroupArn           *string                  `json:"EndpointGroupArn,omitempty"`
	EndpointGroupRegion        *string                  `json:"EndpointGroupRegion,omitempty"`
	HealthCheckIntervalSeconds *int64                   `json:"HealthCheckIntervalSeconds,omitempty"`
	HealthCheckPath            *string                  `json:"HealthCheckPath,omitempty"`
	HealthCheckPort            *int64                   `json:"HealthCheckPort,omitempty"`
	HealthCheckProtocol        *HealthCheckProtocolEnum `json:"HealthCheckProtocol,omitempty"`
	PortOverrides              []PortOverride           `json:"PortOverrides,omitempty"`
	ThresholdCount             *int64                   `json:"ThresholdCount,omitempty"`
	TrafficDialPercentage      *float32                 `json:"TrafficDialPercentage,omitempty"`
}
