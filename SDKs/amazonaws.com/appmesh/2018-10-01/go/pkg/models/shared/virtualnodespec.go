package shared

type VirtualNodeSpec struct {
	Backends         []string          `json:"backends,omitempty"`
	Listeners        []Listener        `json:"listeners,omitempty"`
	ServiceDiscovery *ServiceDiscovery `json:"serviceDiscovery,omitempty"`
}
