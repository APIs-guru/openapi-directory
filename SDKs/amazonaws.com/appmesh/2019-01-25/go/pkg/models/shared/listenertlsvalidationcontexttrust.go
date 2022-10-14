package shared

type ListenerTLSValidationContextTrust struct {
	File *TLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
