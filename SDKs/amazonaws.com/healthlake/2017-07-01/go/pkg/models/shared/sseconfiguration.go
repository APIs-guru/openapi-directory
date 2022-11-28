package shared

// SseConfiguration
//
//	The server-side encryption key configuration for a customer provided encryption key.
type SseConfiguration struct {
	KmsEncryptionConfig KmsEncryptionConfig `json:"KmsEncryptionConfig"`
}
