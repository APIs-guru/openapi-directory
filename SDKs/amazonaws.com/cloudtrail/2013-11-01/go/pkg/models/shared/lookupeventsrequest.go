package shared

import (
	"time"
)

type LookupEventsRequest struct {
	EndTime          *time.Time         `json:"EndTime"`
	EventCategory    *EventCategoryEnum `json:"EventCategory"`
	LookupAttributes []LookupAttribute  `json:"LookupAttributes"`
	MaxResults       *int64             `json:"MaxResults"`
	NextToken        *string            `json:"NextToken"`
	StartTime        *time.Time         `json:"StartTime"`
}
