package shared

import (
	"time"
)

type Event struct {
	Date             *time.Time      `json:"Date,omitempty"`
	EventCategories  []string        `json:"EventCategories,omitempty"`
	Message          *string         `json:"Message,omitempty"`
	SourceIdentifier *string         `json:"SourceIdentifier,omitempty"`
	SourceType       *SourceTypeEnum `json:"SourceType,omitempty"`
}
