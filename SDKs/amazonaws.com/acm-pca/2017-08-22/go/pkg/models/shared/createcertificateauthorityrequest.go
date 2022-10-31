package shared



type CreateCertificateAuthorityRequest struct {
    CertificateAuthorityConfiguration CertificateAuthorityConfiguration `json:"CertificateAuthorityConfiguration"`
    CertificateAuthorityType CertificateAuthorityTypeEnum `json:"CertificateAuthorityType"`
    IdempotencyToken *string `json:"IdempotencyToken,omitempty"`
    KeyStorageSecurityStandard *KeyStorageSecurityStandardEnum `json:"KeyStorageSecurityStandard,omitempty"`
    RevocationConfiguration *RevocationConfiguration `json:"RevocationConfiguration,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

