package shared

// RegisterCaCertificateResponse
// The output from the RegisterCACertificateResponse operation.
type RegisterCaCertificateResponse struct {
	CertificateArn *string `json:"certificateArn,omitempty"`
	CertificateID  *string `json:"certificateId,omitempty"`
}
