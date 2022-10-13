package shared

type CustomCodeSigning struct {
	CertificateChain   *CodeSigningCertificateChain `json:"certificateChain"`
	HashAlgorithm      *string                      `json:"hashAlgorithm"`
	Signature          *CodeSigningSignature        `json:"signature"`
	SignatureAlgorithm *string                      `json:"signatureAlgorithm"`
}
