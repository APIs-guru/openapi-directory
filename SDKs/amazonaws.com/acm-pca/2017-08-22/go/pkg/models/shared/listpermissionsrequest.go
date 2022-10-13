package shared

type ListPermissionsRequest struct {
	CertificateAuthorityArn string  `json:"CertificateAuthorityArn"`
	MaxResults              *int64  `json:"MaxResults"`
	NextToken               *string `json:"NextToken"`
}
