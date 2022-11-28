package shared

import (
	"time"
)

// Event
// Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.
type Event struct {
	Date             *time.Time      `json:"Date,omitempty"`
	EventCategories  []string        `json:"EventCategories,omitempty"`
	Message          *string         `json:"Message,omitempty"`
	SourceIdentifier *string         `json:"SourceIdentifier,omitempty"`
	SourceType       *SourceTypeEnum `json:"SourceType,omitempty"`
}
