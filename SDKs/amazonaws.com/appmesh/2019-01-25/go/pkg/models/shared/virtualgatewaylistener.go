package shared

// VirtualGatewayListener
// An object that represents a listener for a virtual gateway.
type VirtualGatewayListener struct {
	ConnectionPool *VirtualGatewayConnectionPool    `json:"connectionPool,omitempty"`
	HealthCheck    *VirtualGatewayHealthCheckPolicy `json:"healthCheck,omitempty"`
	PortMapping    VirtualGatewayPortMapping        `json:"portMapping"`
	TLS            *VirtualGatewayListenerTLS       `json:"tls,omitempty"`
}
