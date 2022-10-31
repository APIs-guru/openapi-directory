package shared



type VirtualGatewaySpec struct {
    BackendDefaults *VirtualGatewayBackendDefaults `json:"backendDefaults,omitempty"`
    Listeners []VirtualGatewayListener `json:"listeners"`
    Logging *VirtualGatewayLogging `json:"logging,omitempty"`
    
}

