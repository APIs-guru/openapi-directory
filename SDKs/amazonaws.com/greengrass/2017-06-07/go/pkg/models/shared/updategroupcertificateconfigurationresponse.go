package shared

type UpdateGroupCertificateConfigurationResponse struct {
	CertificateAuthorityExpiryInMilliseconds *string `json:"CertificateAuthorityExpiryInMilliseconds"`
	CertificateExpiryInMilliseconds          *string `json:"CertificateExpiryInMilliseconds"`
	GroupID                                  *string `json:"GroupId"`
}
