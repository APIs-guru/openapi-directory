package shared

// VirtualGatewayTLSValidationContextTrust
// An object that represents a Transport Layer Security (TLS) validation context trust.
type VirtualGatewayTLSValidationContextTrust struct {
	Acm  *VirtualGatewayTLSValidationContextAcmTrust  `json:"acm,omitempty"`
	File *VirtualGatewayTLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *VirtualGatewayTLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
