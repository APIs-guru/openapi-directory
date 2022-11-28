package shared

// RegisterCertificateResponse
// The output from the RegisterCertificate operation.
type RegisterCertificateResponse struct {
	CertificateArn *string `json:"certificateArn,omitempty"`
	CertificateID  *string `json:"certificateId,omitempty"`
}
