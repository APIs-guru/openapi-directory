package shared

type RequestCertificateRequest struct {
	CertificateAuthorityArn *string                  `json:"CertificateAuthorityArn,omitempty"`
	DomainName              string                   `json:"DomainName"`
	DomainValidationOptions []DomainValidationOption `json:"DomainValidationOptions,omitempty"`
	IdempotencyToken        *string                  `json:"IdempotencyToken,omitempty"`
	Options                 *CertificateOptions      `json:"Options,omitempty"`
	SubjectAlternativeNames []string                 `json:"SubjectAlternativeNames,omitempty"`
	Tags                    []Tag                    `json:"Tags,omitempty"`
	ValidationMethod        *ValidationMethodEnum    `json:"ValidationMethod,omitempty"`
}
