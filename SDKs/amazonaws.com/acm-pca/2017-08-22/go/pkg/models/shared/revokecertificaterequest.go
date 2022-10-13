package shared

type RevokeCertificateRequest struct {
	CertificateAuthorityArn string               `json:"CertificateAuthorityArn"`
	CertificateSerial       string               `json:"CertificateSerial"`
	RevocationReason        RevocationReasonEnum `json:"RevocationReason"`
}
