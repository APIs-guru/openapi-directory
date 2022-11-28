package shared

// EncryptionEntity
// Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.
type EncryptionEntity struct {
	FieldPatterns FieldPatterns
	ProviderID    string
	PublicKeyID   string
}
