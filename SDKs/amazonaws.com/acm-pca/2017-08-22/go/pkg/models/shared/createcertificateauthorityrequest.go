package shared

type CreateCertificateAuthorityRequest struct {
	CertificateAuthorityConfiguration CertificateAuthorityConfiguration `json:"CertificateAuthorityConfiguration"`
	CertificateAuthorityType          CertificateAuthorityTypeEnum      `json:"CertificateAuthorityType"`
	IdempotencyToken                  *string                           `json:"IdempotencyToken"`
	KeyStorageSecurityStandard        *KeyStorageSecurityStandardEnum   `json:"KeyStorageSecurityStandard"`
	RevocationConfiguration           *RevocationConfiguration          `json:"RevocationConfiguration"`
	Tags                              []Tag                             `json:"Tags"`
}
