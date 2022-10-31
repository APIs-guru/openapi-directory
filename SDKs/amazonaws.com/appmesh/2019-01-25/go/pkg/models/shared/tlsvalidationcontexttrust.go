package shared

type TLSValidationContextTrust struct {
	Acm  *TLSValidationContextAcmTrust  `json:"acm,omitempty"`
	File *TLSValidationContextFileTrust `json:"file,omitempty"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds,omitempty"`
}
