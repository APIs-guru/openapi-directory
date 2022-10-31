package shared

type CreateCertificateFromCsrResponse struct {
	CertificateArn *string `json:"certificateArn,omitempty"`
	CertificateID  *string `json:"certificateId,omitempty"`
	CertificatePem *string `json:"certificatePem,omitempty"`
}
