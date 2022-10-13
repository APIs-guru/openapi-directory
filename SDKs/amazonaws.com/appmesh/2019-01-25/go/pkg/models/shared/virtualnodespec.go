package shared

type VirtualNodeSpec struct {
	BackendDefaults  *BackendDefaults  `json:"backendDefaults"`
	Backends         []Backend         `json:"backends"`
	Listeners        []Listener        `json:"listeners"`
	Logging          *Logging          `json:"logging"`
	ServiceDiscovery *ServiceDiscovery `json:"serviceDiscovery"`
}
