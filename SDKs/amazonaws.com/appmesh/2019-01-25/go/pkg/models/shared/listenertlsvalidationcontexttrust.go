package shared

// ListenerTLSValidationContextTrust
// An object that represents a listener's Transport Layer Security (TLS) validation context trust.
type ListenerTLSValidationContextTrust struct {
	File *TLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
