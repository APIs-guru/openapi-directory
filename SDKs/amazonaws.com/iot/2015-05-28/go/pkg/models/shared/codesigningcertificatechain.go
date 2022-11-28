package shared

// CodeSigningCertificateChain
// Describes the certificate chain being used when code signing a file.
type CodeSigningCertificateChain struct {
	CertificateName *string `json:"certificateName,omitempty"`
	InlineDocument  *string `json:"inlineDocument,omitempty"`
}
