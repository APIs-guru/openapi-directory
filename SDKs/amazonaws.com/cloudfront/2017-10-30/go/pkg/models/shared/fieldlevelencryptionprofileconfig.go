package shared

// FieldLevelEncryptionProfileConfig
// A complex data type of profiles for the field-level encryption.
type FieldLevelEncryptionProfileConfig struct {
	CallerReference    string
	Comment            *string
	EncryptionEntities EncryptionEntities
	Name               string
}
