package shared



type UpdateEndpointGroupRequest struct {
    EndpointConfigurations []EndpointConfiguration `json:"EndpointConfigurations,omitempty"`
    EndpointGroupArn string `json:"EndpointGroupArn"`
    HealthCheckIntervalSeconds *int64 `json:"HealthCheckIntervalSeconds,omitempty"`
    HealthCheckPath *string `json:"HealthCheckPath,omitempty"`
    HealthCheckPort *int64 `json:"HealthCheckPort,omitempty"`
    HealthCheckProtocol *HealthCheckProtocolEnum `json:"HealthCheckProtocol,omitempty"`
    PortOverrides []PortOverride `json:"PortOverrides,omitempty"`
    ThresholdCount *int64 `json:"ThresholdCount,omitempty"`
    TrafficDialPercentage *float32 `json:"TrafficDialPercentage,omitempty"`
    
}

