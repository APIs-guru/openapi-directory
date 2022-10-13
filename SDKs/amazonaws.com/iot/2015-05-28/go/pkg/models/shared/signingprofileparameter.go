package shared

type SigningProfileParameter struct {
	CertificateArn          *string `json:"certificateArn"`
	CertificatePathOnDevice *string `json:"certificatePathOnDevice"`
	Platform                *string `json:"platform"`
}
