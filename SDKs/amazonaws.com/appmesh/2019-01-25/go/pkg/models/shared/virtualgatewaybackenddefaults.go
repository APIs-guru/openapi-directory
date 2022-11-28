package shared

// VirtualGatewayBackendDefaults
// An object that represents the default properties for a backend.
type VirtualGatewayBackendDefaults struct {
	ClientPolicy *VirtualGatewayClientPolicy `json:"clientPolicy,omitempty"`
}
