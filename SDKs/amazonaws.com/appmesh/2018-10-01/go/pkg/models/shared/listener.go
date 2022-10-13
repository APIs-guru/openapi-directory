package shared

type Listener struct {
	HealthCheck *HealthCheckPolicy `json:"healthCheck"`
	PortMapping *PortMapping       `json:"portMapping"`
}
