package shared

type EncryptionConfiguration struct {
	KmsEncryptionConfig *KmsEncryptionConfig    `json:"KMSEncryptionConfig,omitempty"`
	NoEncryptionConfig  *NoEncryptionConfigEnum `json:"NoEncryptionConfig,omitempty"`
}
