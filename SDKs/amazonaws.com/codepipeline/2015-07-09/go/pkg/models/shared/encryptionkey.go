package shared

// EncryptionKey
// Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
type EncryptionKey struct {
	ID   string                `json:"id"`
	Type EncryptionKeyTypeEnum `json:"type"`
}
