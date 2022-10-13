package shared

type RequestCertificateRequest struct {
	CertificateAuthorityArn *string                  `json:"CertificateAuthorityArn"`
	DomainName              string                   `json:"DomainName"`
	DomainValidationOptions []DomainValidationOption `json:"DomainValidationOptions"`
	IdempotencyToken        *string                  `json:"IdempotencyToken"`
	Options                 *CertificateOptions      `json:"Options"`
	SubjectAlternativeNames []string                 `json:"SubjectAlternativeNames"`
	Tags                    []Tag                    `json:"Tags"`
	ValidationMethod        *ValidationMethodEnum    `json:"ValidationMethod"`
}
