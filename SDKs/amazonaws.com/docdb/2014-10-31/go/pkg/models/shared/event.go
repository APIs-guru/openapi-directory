package shared

import (
	"time"
)

// Event
// Detailed information about an event.
type Event struct {
	Date             *time.Time
	EventCategories  []string
	Message          *string
	SourceArn        *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
