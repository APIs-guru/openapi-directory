package shared

// FieldLevelEncryptionProfileList
// List of field-level encryption profiles.
type FieldLevelEncryptionProfileList struct {
	Items      []FieldLevelEncryptionProfileSummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
