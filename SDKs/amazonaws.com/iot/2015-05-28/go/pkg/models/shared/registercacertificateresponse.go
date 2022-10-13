package shared

type RegisterCaCertificateResponse struct {
	CertificateArn *string `json:"certificateArn"`
	CertificateID  *string `json:"certificateId"`
}
