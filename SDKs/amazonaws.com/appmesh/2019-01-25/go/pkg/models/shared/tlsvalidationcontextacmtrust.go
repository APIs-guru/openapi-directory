package shared

// TLSValidationContextAcmTrust
// An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
type TLSValidationContextAcmTrust struct {
	CertificateAuthorityArns []string `json:"certificateAuthorityArns"`
}
