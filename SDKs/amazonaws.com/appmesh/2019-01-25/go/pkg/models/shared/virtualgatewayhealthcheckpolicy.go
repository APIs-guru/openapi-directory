package shared

type VirtualGatewayHealthCheckPolicy struct {
	HealthyThreshold   int64                          `json:"healthyThreshold"`
	IntervalMillis     int64                          `json:"intervalMillis"`
	Path               *string                        `json:"path,omitempty"`
	Port               *int64                         `json:"port,omitempty"`
	Protocol           VirtualGatewayPortProtocolEnum `json:"protocol"`
	TimeoutMillis      int64                          `json:"timeoutMillis"`
	UnhealthyThreshold int64                          `json:"unhealthyThreshold"`
}
