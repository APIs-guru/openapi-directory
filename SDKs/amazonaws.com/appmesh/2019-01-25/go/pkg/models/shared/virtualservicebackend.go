package shared

// VirtualServiceBackend
// An object that represents a virtual service backend for a virtual node.
type VirtualServiceBackend struct {
	ClientPolicy       *ClientPolicy `json:"clientPolicy,omitempty"`
	VirtualServiceName string        `json:"virtualServiceName"`
}
