package shared

type GetGroupCertificateConfigurationResponse struct {
	CertificateAuthorityExpiryInMilliseconds *string `json:"CertificateAuthorityExpiryInMilliseconds"`
	CertificateExpiryInMilliseconds          *string `json:"CertificateExpiryInMilliseconds"`
	GroupID                                  *string `json:"GroupId"`
}
