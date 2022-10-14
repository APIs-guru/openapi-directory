package shared

type DescribeCaCertificateResponse struct {
	CertificateDescription *CaCertificateDescription `json:"certificateDescription,omitempty"`
	RegistrationConfig     *RegistrationConfig       `json:"registrationConfig,omitempty"`
}
