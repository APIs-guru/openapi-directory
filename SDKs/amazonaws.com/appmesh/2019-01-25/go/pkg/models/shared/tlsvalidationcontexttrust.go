package shared

// TLSValidationContextTrust
// An object that represents a Transport Layer Security (TLS) validation context trust.
type TLSValidationContextTrust struct {
	Acm  *TLSValidationContextAcmTrust  `json:"acm,omitempty"`
	File *TLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
