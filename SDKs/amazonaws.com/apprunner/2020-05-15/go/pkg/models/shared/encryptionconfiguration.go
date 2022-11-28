package shared

// EncryptionConfiguration
// Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
type EncryptionConfiguration struct {
	KmsKey string `json:"KmsKey"`
}
