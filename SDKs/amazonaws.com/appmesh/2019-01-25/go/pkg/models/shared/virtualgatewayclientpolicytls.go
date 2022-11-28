package shared

// VirtualGatewayClientPolicyTLS
// An object that represents a Transport Layer Security (TLS) client policy.
type VirtualGatewayClientPolicyTLS struct {
	Certificate *VirtualGatewayClientTLSCertificate `json:"certificate,omitempty"`
	Enforce     *bool                               `json:"enforce,omitempty"`
	Ports       []int64                             `json:"ports,omitempty"`
	Validation  VirtualGatewayTLSValidationContext  `json:"validation"`
}
