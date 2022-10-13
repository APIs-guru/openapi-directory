package shared

type CreateEndpointGroupRequest struct {
	EndpointConfigurations     []EndpointConfiguration  `json:"EndpointConfigurations"`
	EndpointGroupRegion        string                   `json:"EndpointGroupRegion"`
	HealthCheckIntervalSeconds *int64                   `json:"HealthCheckIntervalSeconds"`
	HealthCheckPath            *string                  `json:"HealthCheckPath"`
	HealthCheckPort            *int64                   `json:"HealthCheckPort"`
	HealthCheckProtocol        *HealthCheckProtocolEnum `json:"HealthCheckProtocol"`
	IdempotencyToken           string                   `json:"IdempotencyToken"`
	ListenerArn                string                   `json:"ListenerArn"`
	PortOverrides              []PortOverride           `json:"PortOverrides"`
	ThresholdCount             *int64                   `json:"ThresholdCount"`
	TrafficDialPercentage      *float32                 `json:"TrafficDialPercentage"`
}
