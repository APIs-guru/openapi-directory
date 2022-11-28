package shared

// CustomCodeSigning
// Describes a custom method used to code sign a file.
type CustomCodeSigning struct {
	CertificateChain   *CodeSigningCertificateChain `json:"certificateChain,omitempty"`
	HashAlgorithm      *string                      `json:"hashAlgorithm,omitempty"`
	Signature          *CodeSigningSignature        `json:"signature,omitempty"`
	SignatureAlgorithm *string                      `json:"signatureAlgorithm,omitempty"`
}
