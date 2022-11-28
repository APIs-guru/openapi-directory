package shared

// VirtualNodeSpec
// An object that represents the specification of a virtual node.
type VirtualNodeSpec struct {
	BackendDefaults  *BackendDefaults  `json:"backendDefaults,omitempty"`
	Backends         []Backend         `json:"backends,omitempty"`
	Listeners        []Listener        `json:"listeners,omitempty"`
	Logging          *Logging          `json:"logging,omitempty"`
	ServiceDiscovery *ServiceDiscovery `json:"serviceDiscovery,omitempty"`
}
