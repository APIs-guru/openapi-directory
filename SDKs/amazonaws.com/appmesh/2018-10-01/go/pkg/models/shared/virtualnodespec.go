package shared

// VirtualNodeSpec
// An object representing the specification of a virtual node.
type VirtualNodeSpec struct {
	Backends         []string          `json:"backends,omitempty"`
	Listeners        []Listener        `json:"listeners,omitempty"`
	ServiceDiscovery *ServiceDiscovery `json:"serviceDiscovery,omitempty"`
}
