package shared

import (
	"time"
)

type Event struct {
	Date             *time.Time      `json:"Date"`
	EventCategories  []string        `json:"EventCategories"`
	Message          *string         `json:"Message"`
	SourceIdentifier *string         `json:"SourceIdentifier"`
	SourceType       *SourceTypeEnum `json:"SourceType"`
}
