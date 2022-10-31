package shared

type CustomCodeSigning struct {
	CertificateChain   *CodeSigningCertificateChain `json:"certificateChain,omitempty"`
	HashAlgorithm      *string                      `json:"hashAlgorithm,omitempty"`
	Signature          *CodeSigningSignature        `json:"signature,omitempty"`
	SignatureAlgorithm *string                      `json:"signatureAlgorithm,omitempty"`
}
