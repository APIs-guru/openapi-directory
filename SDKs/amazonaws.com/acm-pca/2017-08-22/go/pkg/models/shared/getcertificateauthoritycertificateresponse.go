package shared

type GetCertificateAuthorityCertificateResponse struct {
	Certificate      *string `json:"Certificate,omitempty"`
	CertificateChain *string `json:"CertificateChain,omitempty"`
}
