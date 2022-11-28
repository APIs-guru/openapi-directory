package shared

// TLSValidationContextFileTrust
// An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
type TLSValidationContextFileTrust struct {
	CertificateChain string `json:"certificateChain"`
}
