package shared

type UntagCertificateAuthorityRequest struct {
	CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
	Tags                    []Tag  `json:"Tags"`
}
