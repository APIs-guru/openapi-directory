package shared

type Listener struct {
	ConnectionPool   *VirtualNodeConnectionPool `json:"connectionPool,omitempty"`
	HealthCheck      *HealthCheckPolicy         `json:"healthCheck,omitempty"`
	OutlierDetection *OutlierDetection          `json:"outlierDetection,omitempty"`
	PortMapping      PortMapping                `json:"portMapping"`
	Timeout          *ListenerTimeout           `json:"timeout,omitempty"`
	TLS              *ListenerTLS               `json:"tls,omitempty"`
}
