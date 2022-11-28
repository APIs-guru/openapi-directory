package shared

// EncryptionConfiguration
// If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
type EncryptionConfiguration struct {
	EncryptionOption EncryptionOptionEnum `json:"EncryptionOption"`
	KmsKey           *string              `json:"KmsKey,omitempty"`
}
