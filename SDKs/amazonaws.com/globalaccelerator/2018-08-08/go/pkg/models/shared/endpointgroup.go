package shared

type EndpointGroup struct {
	EndpointDescriptions       []EndpointDescription    `json:"EndpointDescriptions"`
	EndpointGroupArn           *string                  `json:"EndpointGroupArn"`
	EndpointGroupRegion        *string                  `json:"EndpointGroupRegion"`
	HealthCheckIntervalSeconds *int64                   `json:"HealthCheckIntervalSeconds"`
	HealthCheckPath            *string                  `json:"HealthCheckPath"`
	HealthCheckPort            *int64                   `json:"HealthCheckPort"`
	HealthCheckProtocol        *HealthCheckProtocolEnum `json:"HealthCheckProtocol"`
	PortOverrides              []PortOverride           `json:"PortOverrides"`
	ThresholdCount             *int64                   `json:"ThresholdCount"`
	TrafficDialPercentage      *float32                 `json:"TrafficDialPercentage"`
}
