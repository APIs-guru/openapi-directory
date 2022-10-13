package shared

type VirtualGatewayClientPolicyTLS struct {
	Certificate *VirtualGatewayClientTLSCertificate `json:"certificate"`
	Enforce     *bool                               `json:"enforce"`
	Ports       []int64                             `json:"ports"`
	Validation  VirtualGatewayTLSValidationContext  `json:"validation"`
}
