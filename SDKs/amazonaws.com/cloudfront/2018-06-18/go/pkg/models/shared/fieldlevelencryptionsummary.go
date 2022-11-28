package shared

import (
	"time"
)

// FieldLevelEncryptionSummary
// A summary of a field-level encryption item.
type FieldLevelEncryptionSummary struct {
	Comment                  *string
	ContentTypeProfileConfig *ContentTypeProfileConfig
	ID                       string
	LastModifiedTime         time.Time
	QueryArgProfileConfig    *QueryArgProfileConfig
}
