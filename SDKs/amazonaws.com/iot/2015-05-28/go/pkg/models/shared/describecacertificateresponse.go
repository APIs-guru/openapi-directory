package shared

// DescribeCaCertificateResponse
// The output from the DescribeCACertificate operation.
type DescribeCaCertificateResponse struct {
	CertificateDescription *CaCertificateDescription `json:"certificateDescription,omitempty"`
	RegistrationConfig     *RegistrationConfig       `json:"registrationConfig,omitempty"`
}
