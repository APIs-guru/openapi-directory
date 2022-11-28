package shared

import (
	"time"
)

// ViolationEventOccurrenceRange
//
//	Specifies the time period of which violation events occurred between.
type ViolationEventOccurrenceRange struct {
	EndTime   time.Time `json:"endTime"`
	StartTime time.Time `json:"startTime"`
}
