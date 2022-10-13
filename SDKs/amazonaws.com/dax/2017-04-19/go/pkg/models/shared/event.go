package shared

import (
	"time"
)

type Event struct {
	Date       *time.Time      `json:"Date"`
	Message    *string         `json:"Message"`
	SourceName *string         `json:"SourceName"`
	SourceType *SourceTypeEnum `json:"SourceType"`
}
