package shared

// VirtualGatewaySpec
// An object that represents the specification of a service mesh resource.
type VirtualGatewaySpec struct {
	BackendDefaults *VirtualGatewayBackendDefaults `json:"backendDefaults,omitempty"`
	Listeners       []VirtualGatewayListener       `json:"listeners"`
	Logging         *VirtualGatewayLogging         `json:"logging,omitempty"`
}
