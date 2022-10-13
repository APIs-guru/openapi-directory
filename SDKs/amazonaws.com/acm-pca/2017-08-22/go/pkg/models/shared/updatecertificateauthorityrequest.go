package shared

type UpdateCertificateAuthorityRequest struct {
	CertificateAuthorityArn string                          `json:"CertificateAuthorityArn"`
	RevocationConfiguration *RevocationConfiguration        `json:"RevocationConfiguration"`
	Status                  *CertificateAuthorityStatusEnum `json:"Status"`
}
