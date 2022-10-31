package shared



type IssueCertificateRequest struct {
    APIPassthrough *APIPassthrough `json:"ApiPassthrough,omitempty"`
    CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
    Csr string `json:"Csr"`
    IdempotencyToken *string `json:"IdempotencyToken,omitempty"`
    SigningAlgorithm SigningAlgorithmEnum `json:"SigningAlgorithm"`
    TemplateArn *string `json:"TemplateArn,omitempty"`
    Validity Validity `json:"Validity"`
    ValidityNotBefore *Validity `json:"ValidityNotBefore,omitempty"`
    
}

