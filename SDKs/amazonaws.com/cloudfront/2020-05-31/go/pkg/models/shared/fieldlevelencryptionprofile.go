package shared

import (
	"time"
)

// FieldLevelEncryptionProfile
// A complex data type for field-level encryption profiles.
type FieldLevelEncryptionProfile struct {
	FieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfig
	ID                                string
	LastModifiedTime                  time.Time
}
