package shared

import (
	"time"
)

// FieldLevelEncryptionProfileSummary
// The field-level encryption profile summary.
type FieldLevelEncryptionProfileSummary struct {
	Comment            *string
	EncryptionEntities EncryptionEntities
	ID                 string
	LastModifiedTime   time.Time
	Name               string
}
