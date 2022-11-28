package shared

// VirtualGatewayTLSValidationContextAcmTrust
// An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
type VirtualGatewayTLSValidationContextAcmTrust struct {
	CertificateAuthorityArns []string `json:"certificateAuthorityArns"`
}
