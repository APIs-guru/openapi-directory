package shared

type ListenerTLSValidationContextTrust struct {
	File *TLSValidationContextFileTrust `json:"file"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds"`
}
