package shared

type VirtualNodeSpec struct {
	Backends         []string          `json:"backends"`
	Listeners        []Listener        `json:"listeners"`
	ServiceDiscovery *ServiceDiscovery `json:"serviceDiscovery"`
}
