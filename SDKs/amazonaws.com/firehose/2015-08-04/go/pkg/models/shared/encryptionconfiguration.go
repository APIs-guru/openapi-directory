package shared

// EncryptionConfiguration
// Describes the encryption for a destination in Amazon S3.
type EncryptionConfiguration struct {
	KmsEncryptionConfig *KmsEncryptionConfig    `json:"KMSEncryptionConfig,omitempty"`
	NoEncryptionConfig  *NoEncryptionConfigEnum `json:"NoEncryptionConfig,omitempty"`
}
