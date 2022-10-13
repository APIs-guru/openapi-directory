package shared

type GetCertificateResponse struct {
	Certificate      *string `json:"Certificate"`
	CertificateChain *string `json:"CertificateChain"`
}
