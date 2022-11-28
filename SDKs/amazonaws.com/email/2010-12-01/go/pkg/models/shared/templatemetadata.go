package shared

import (
	"time"
)

// TemplateMetadata
// Contains information about an email template.
type TemplateMetadata struct {
	CreatedTimestamp *time.Time
	Name             *string
}
