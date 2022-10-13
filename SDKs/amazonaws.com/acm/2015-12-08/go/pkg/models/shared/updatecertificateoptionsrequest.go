package shared

type UpdateCertificateOptionsRequest struct {
	CertificateArn string             `json:"CertificateArn"`
	Options        CertificateOptions `json:"Options"`
}
