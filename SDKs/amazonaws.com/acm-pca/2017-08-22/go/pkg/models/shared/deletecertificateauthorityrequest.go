package shared

type DeleteCertificateAuthorityRequest struct {
	CertificateAuthorityArn     string `json:"CertificateAuthorityArn"`
	PermanentDeletionTimeInDays *int64 `json:"PermanentDeletionTimeInDays"`
}
