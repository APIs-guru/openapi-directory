package shared

type VirtualGatewayTLSValidationContextTrust struct {
	Acm  *VirtualGatewayTLSValidationContextAcmTrust  `json:"acm"`
	File *VirtualGatewayTLSValidationContextFileTrust `json:"file"`
	Sds  *VirtualGatewayTLSValidationContextSdsTrust  `json:"sds"`
}
