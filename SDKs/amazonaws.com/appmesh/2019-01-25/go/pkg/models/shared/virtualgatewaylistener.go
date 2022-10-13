package shared

type VirtualGatewayListener struct {
	ConnectionPool *VirtualGatewayConnectionPool    `json:"connectionPool"`
	HealthCheck    *VirtualGatewayHealthCheckPolicy `json:"healthCheck"`
	PortMapping    VirtualGatewayPortMapping        `json:"portMapping"`
	TLS            *VirtualGatewayListenerTLS       `json:"tls"`
}
