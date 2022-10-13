package shared

type DescribeCaCertificateResponse struct {
	CertificateDescription *CaCertificateDescription `json:"certificateDescription"`
	RegistrationConfig     *RegistrationConfig       `json:"registrationConfig"`
}
