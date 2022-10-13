package shared

type CreateCertificateFromCsrResponse struct {
	CertificateArn *string `json:"certificateArn"`
	CertificateID  *string `json:"certificateId"`
	CertificatePem *string `json:"certificatePem"`
}
