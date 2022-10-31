package shared

type ImportCertificateRequest struct {
	Certificate      string  `json:"Certificate"`
	CertificateArn   *string `json:"CertificateArn,omitempty"`
	CertificateChain *string `json:"CertificateChain,omitempty"`
	PrivateKey       string  `json:"PrivateKey"`
	Tags             []Tag   `json:"Tags,omitempty"`
}
