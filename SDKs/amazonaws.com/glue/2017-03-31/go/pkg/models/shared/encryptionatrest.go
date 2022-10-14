package shared

type EncryptionAtRest struct {
	CatalogEncryptionMode CatalogEncryptionModeEnum `json:"CatalogEncryptionMode"`
	SseAwsKmsKeyID        *string                   `json:"SseAwsKmsKeyId,omitempty"`
}
