package shared

type ListTagsRequest struct {
	CertificateAuthorityArn string  `json:"CertificateAuthorityArn"`
	MaxResults              *int64  `json:"MaxResults"`
	NextToken               *string `json:"NextToken"`
}
