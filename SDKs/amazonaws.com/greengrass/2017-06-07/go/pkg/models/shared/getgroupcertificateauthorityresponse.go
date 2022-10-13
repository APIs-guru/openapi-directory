package shared

type GetGroupCertificateAuthorityResponse struct {
	GroupCertificateAuthorityArn *string `json:"GroupCertificateAuthorityArn"`
	GroupCertificateAuthorityID  *string `json:"GroupCertificateAuthorityId"`
	PemEncodedCertificate        *string `json:"PemEncodedCertificate"`
}
