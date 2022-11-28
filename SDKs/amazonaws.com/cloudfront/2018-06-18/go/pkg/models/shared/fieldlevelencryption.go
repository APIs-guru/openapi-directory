package shared

import (
	"time"
)

// FieldLevelEncryption
// A complex data type that includes the profile configurations and other options specified for field-level encryption.
type FieldLevelEncryption struct {
	FieldLevelEncryptionConfig FieldLevelEncryptionConfig
	ID                         string
	LastModifiedTime           time.Time
}
