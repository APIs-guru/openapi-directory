package shared

type GetCertificateAuthorityCertificateResponse struct {
	Certificate      *string `json:"Certificate"`
	CertificateChain *string `json:"CertificateChain"`
}
