package shared

type VirtualGatewayListenerTLS struct {
	Certificate VirtualGatewayListenerTLSCertificate        `json:"certificate"`
	Mode        VirtualGatewayListenerTLSModeEnum           `json:"mode"`
	Validation  *VirtualGatewayListenerTLSValidationContext `json:"validation"`
}
