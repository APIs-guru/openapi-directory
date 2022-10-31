package shared

type VirtualGatewayTLSValidationContextTrust struct {
	Acm  *VirtualGatewayTLSValidationContextAcmTrust  `json:"acm,omitempty"`
	File *VirtualGatewayTLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *VirtualGatewayTLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
