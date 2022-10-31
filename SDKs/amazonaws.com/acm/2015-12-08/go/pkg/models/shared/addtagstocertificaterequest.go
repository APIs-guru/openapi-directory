package shared

type AddTagsToCertificateRequest struct {
	CertificateArn string `json:"CertificateArn"`
	Tags           []Tag  `json:"Tags"`
}
