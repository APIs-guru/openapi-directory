package shared

type VirtualGatewayListenerTLSValidationContextTrust struct {
	File *VirtualGatewayTLSValidationContextFileTrust `json:"file"`
	Sds  *VirtualGatewayTLSValidationContextSdsTrust  `json:"sds"`
}
