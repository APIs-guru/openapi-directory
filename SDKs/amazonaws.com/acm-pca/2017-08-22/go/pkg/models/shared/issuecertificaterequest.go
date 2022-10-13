package shared

type IssueCertificateRequest struct {
	APIPassthrough          *APIPassthrough      `json:"ApiPassthrough"`
	CertificateAuthorityArn string               `json:"CertificateAuthorityArn"`
	Csr                     string               `json:"Csr"`
	IdempotencyToken        *string              `json:"IdempotencyToken"`
	SigningAlgorithm        SigningAlgorithmEnum `json:"SigningAlgorithm"`
	TemplateArn             *string              `json:"TemplateArn"`
	Validity                Validity             `json:"Validity"`
	ValidityNotBefore       *Validity            `json:"ValidityNotBefore"`
}
