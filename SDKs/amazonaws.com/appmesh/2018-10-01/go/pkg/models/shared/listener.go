package shared

type Listener struct {
	HealthCheck *HealthCheckPolicy `json:"healthCheck,omitempty"`
	PortMapping *PortMapping       `json:"portMapping,omitempty"`
}
