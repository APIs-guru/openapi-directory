package shared

type CreatePermissionRequest struct {
	Actions                 []ActionTypeEnum `json:"Actions"`
	CertificateAuthorityArn string           `json:"CertificateAuthorityArn"`
	Principal               string           `json:"Principal"`
	SourceAccount           *string          `json:"SourceAccount,omitempty"`
}
