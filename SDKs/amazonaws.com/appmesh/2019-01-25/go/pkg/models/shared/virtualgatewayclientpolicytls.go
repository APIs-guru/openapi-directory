package shared

type VirtualGatewayClientPolicyTLS struct {
	Certificate *VirtualGatewayClientTLSCertificate `json:"certificate,omitempty"`
	Enforce     *bool                               `json:"enforce,omitempty"`
	Ports       []int64                             `json:"ports,omitempty"`
	Validation  VirtualGatewayTLSValidationContext  `json:"validation"`
}
