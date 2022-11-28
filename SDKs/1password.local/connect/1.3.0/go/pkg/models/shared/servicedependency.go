package shared

// ServiceDependency
// The state of a registered server dependency.
type ServiceDependency struct {
	Message *string `json:"message,omitempty"`
	Service *string `json:"service,omitempty"`
	Status  *string `json:"status,omitempty"`
}
