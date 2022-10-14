package shared

type ListPermissionsRequest struct {
	CertificateAuthorityArn string  `json:"CertificateAuthorityArn"`
	MaxResults              *int64  `json:"MaxResults,omitempty"`
	NextToken               *string `json:"NextToken,omitempty"`
}
