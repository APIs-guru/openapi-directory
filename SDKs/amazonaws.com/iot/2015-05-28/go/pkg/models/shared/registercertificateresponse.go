package shared

type RegisterCertificateResponse struct {
	CertificateArn *string `json:"certificateArn"`
	CertificateID  *string `json:"certificateId"`
}
