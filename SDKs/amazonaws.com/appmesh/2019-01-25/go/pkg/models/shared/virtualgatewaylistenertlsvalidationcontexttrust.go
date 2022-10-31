package shared



type VirtualGatewayListenerTLSValidationContextTrust struct {
    File *VirtualGatewayTLSValidationContextFileTrust `json:"file,omitempty"`
    Sds *VirtualGatewayTLSValidationContextSdsTrust `json:"sds,omitempty"`
    
}

