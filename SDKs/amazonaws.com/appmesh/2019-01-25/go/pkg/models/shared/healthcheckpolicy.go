package shared

type HealthCheckPolicy struct {
	HealthyThreshold   int64            `json:"healthyThreshold"`
	IntervalMillis     int64            `json:"intervalMillis"`
	Path               *string          `json:"path"`
	Port               *int64           `json:"port"`
	Protocol           PortProtocolEnum `json:"protocol"`
	TimeoutMillis      int64            `json:"timeoutMillis"`
	UnhealthyThreshold int64            `json:"unhealthyThreshold"`
}
