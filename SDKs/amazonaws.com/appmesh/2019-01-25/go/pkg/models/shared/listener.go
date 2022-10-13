package shared

type Listener struct {
	ConnectionPool   *VirtualNodeConnectionPool `json:"connectionPool"`
	HealthCheck      *HealthCheckPolicy         `json:"healthCheck"`
	OutlierDetection *OutlierDetection          `json:"outlierDetection"`
	PortMapping      PortMapping                `json:"portMapping"`
	Timeout          *ListenerTimeout           `json:"timeout"`
	TLS              *ListenerTLS               `json:"tls"`
}
