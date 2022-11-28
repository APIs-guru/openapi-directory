package shared

// VirtualGatewayClientPolicy
// An object that represents a client policy.
type VirtualGatewayClientPolicy struct {
	TLS *VirtualGatewayClientPolicyTLS `json:"tls,omitempty"`
}
