package shared

type CodeSigningCertificateChain struct {
	CertificateName *string `json:"certificateName,omitempty"`
	InlineDocument  *string `json:"inlineDocument,omitempty"`
}
