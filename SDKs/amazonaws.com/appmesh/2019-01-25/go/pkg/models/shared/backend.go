package shared

// Backend
// An object that represents the backends that a virtual node is expected to send outbound traffic to.
type Backend struct {
	VirtualService *VirtualServiceBackend `json:"virtualService,omitempty"`
}
