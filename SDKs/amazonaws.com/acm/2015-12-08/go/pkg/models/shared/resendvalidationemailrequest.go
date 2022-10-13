package shared

type ResendValidationEmailRequest struct {
	CertificateArn   string `json:"CertificateArn"`
	Domain           string `json:"Domain"`
	ValidationDomain string `json:"ValidationDomain"`
}
