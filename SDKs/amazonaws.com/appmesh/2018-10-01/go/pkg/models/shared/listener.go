package shared

// Listener
// An object representing a listener for a virtual node.
type Listener struct {
	HealthCheck *HealthCheckPolicy `json:"healthCheck,omitempty"`
	PortMapping *PortMapping       `json:"portMapping,omitempty"`
}
