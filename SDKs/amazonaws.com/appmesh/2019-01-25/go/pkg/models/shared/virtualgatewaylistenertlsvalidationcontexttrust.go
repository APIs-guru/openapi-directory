package shared

// VirtualGatewayListenerTLSValidationContextTrust
// An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
type VirtualGatewayListenerTLSValidationContextTrust struct {
	File *VirtualGatewayTLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *VirtualGatewayTLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
