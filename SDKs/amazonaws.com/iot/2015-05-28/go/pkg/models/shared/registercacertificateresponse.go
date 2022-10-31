package shared

type RegisterCaCertificateResponse struct {
	CertificateArn *string `json:"certificateArn,omitempty"`
	CertificateID  *string `json:"certificateId,omitempty"`
}
