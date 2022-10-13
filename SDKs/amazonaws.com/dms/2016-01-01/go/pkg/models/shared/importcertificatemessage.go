package shared

type ImportCertificateMessage struct {
	CertificateIdentifier string  `json:"CertificateIdentifier"`
	CertificatePem        *string `json:"CertificatePem"`
	CertificateWallet     *string `json:"CertificateWallet"`
	Tags                  []Tag   `json:"Tags"`
}
