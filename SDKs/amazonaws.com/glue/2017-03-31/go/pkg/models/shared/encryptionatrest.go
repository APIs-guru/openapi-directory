package shared

// EncryptionAtRest
// Specifies the encryption-at-rest configuration for the Data Catalog.
type EncryptionAtRest struct {
	CatalogEncryptionMode CatalogEncryptionModeEnum `json:"CatalogEncryptionMode"`
	SseAwsKmsKeyID        *string                   `json:"SseAwsKmsKeyId,omitempty"`
}
