package shared

type ImportCertificateAuthorityCertificateRequest struct {
	Certificate             string  `json:"Certificate"`
	CertificateAuthorityArn string  `json:"CertificateAuthorityArn"`
	CertificateChain        *string `json:"CertificateChain"`
}
