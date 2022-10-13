package shared

type EncryptionConfiguration struct {
	KmsEncryptionConfig *KmsEncryptionConfig    `json:"KMSEncryptionConfig"`
	NoEncryptionConfig  *NoEncryptionConfigEnum `json:"NoEncryptionConfig"`
}
