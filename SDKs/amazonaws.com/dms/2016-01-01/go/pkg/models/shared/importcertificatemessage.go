package shared

type ImportCertificateMessage struct {
	CertificateIdentifier string  `json:"CertificateIdentifier"`
	CertificatePem        *string `json:"CertificatePem,omitempty"`
	CertificateWallet     *string `json:"CertificateWallet,omitempty"`
	Tags                  []Tag   `json:"Tags,omitempty"`
}
