package shared

type VirtualGatewaySpec struct {
	BackendDefaults *VirtualGatewayBackendDefaults `json:"backendDefaults"`
	Listeners       []VirtualGatewayListener       `json:"listeners"`
	Logging         *VirtualGatewayLogging         `json:"logging"`
}
