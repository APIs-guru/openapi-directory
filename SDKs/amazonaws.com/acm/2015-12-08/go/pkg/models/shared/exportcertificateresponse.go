package shared

type ExportCertificateResponse struct {
	Certificate      *string `json:"Certificate"`
	CertificateChain *string `json:"CertificateChain"`
	PrivateKey       *string `json:"PrivateKey"`
}
