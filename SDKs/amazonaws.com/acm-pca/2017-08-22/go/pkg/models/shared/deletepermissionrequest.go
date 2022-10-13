package shared

type DeletePermissionRequest struct {
	CertificateAuthorityArn string  `json:"CertificateAuthorityArn"`
	Principal               string  `json:"Principal"`
	SourceAccount           *string `json:"SourceAccount"`
}
