package shared

type ImportCertificateRequest struct {
	Certificate      string  `json:"Certificate"`
	CertificateArn   *string `json:"CertificateArn"`
	CertificateChain *string `json:"CertificateChain"`
	PrivateKey       string  `json:"PrivateKey"`
	Tags             []Tag   `json:"Tags"`
}
