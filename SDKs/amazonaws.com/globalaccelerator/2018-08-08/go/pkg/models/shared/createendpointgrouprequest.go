package shared

type CreateEndpointGroupRequest struct {
	EndpointConfigurations     []EndpointConfiguration  `json:"EndpointConfigurations,omitempty"`
	EndpointGroupRegion        string                   `json:"EndpointGroupRegion"`
	HealthCheckIntervalSeconds *int64                   `json:"HealthCheckIntervalSeconds,omitempty"`
	HealthCheckPath            *string                  `json:"HealthCheckPath,omitempty"`
	HealthCheckPort            *int64                   `json:"HealthCheckPort,omitempty"`
	HealthCheckProtocol        *HealthCheckProtocolEnum `json:"HealthCheckProtocol,omitempty"`
	IdempotencyToken           string                   `json:"IdempotencyToken"`
	ListenerArn                string                   `json:"ListenerArn"`
	PortOverrides              []PortOverride           `json:"PortOverrides,omitempty"`
	ThresholdCount             *int64                   `json:"ThresholdCount,omitempty"`
	TrafficDialPercentage      *float32                 `json:"TrafficDialPercentage,omitempty"`
}
