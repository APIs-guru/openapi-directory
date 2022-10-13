package shared

type TLSValidationContextTrust struct {
	Acm  *TLSValidationContextAcmTrust  `json:"acm"`
	File *TLSValidationContextFileTrust `json:"file"`
	Sds  *TLSValidationContextSdsTrust  `json:"sds"`
}
