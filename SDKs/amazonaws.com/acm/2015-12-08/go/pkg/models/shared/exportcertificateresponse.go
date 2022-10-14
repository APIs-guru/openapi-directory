package shared

type ExportCertificateResponse struct {
	Certificate      *string `json:"Certificate,omitempty"`
	CertificateChain *string `json:"CertificateChain,omitempty"`
	PrivateKey       *string `json:"PrivateKey,omitempty"`
}
