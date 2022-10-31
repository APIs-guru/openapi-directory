package shared

import (
	"time"
)

type Event struct {
	Date       *time.Time      `json:"Date,omitempty"`
	Message    *string         `json:"Message,omitempty"`
	SourceName *string         `json:"SourceName,omitempty"`
	SourceType *SourceTypeEnum `json:"SourceType,omitempty"`
}
