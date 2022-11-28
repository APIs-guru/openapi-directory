package shared

// VirtualGatewayListenerTLS
// An object that represents the Transport Layer Security (TLS) properties for a listener.
type VirtualGatewayListenerTLS struct {
	Certificate VirtualGatewayListenerTLSCertificate        `json:"certificate"`
	Mode        VirtualGatewayListenerTLSModeEnum           `json:"mode"`
	Validation  *VirtualGatewayListenerTLSValidationContext `json:"validation,omitempty"`
}
