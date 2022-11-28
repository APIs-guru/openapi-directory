package shared

import (
	"time"
)

// HistoryRecord
// Describes an event in the history of the Spot Fleet request.
type HistoryRecord struct {
	EventInformation *EventInformation
	EventType        *EventTypeEnum
	Timestamp        *time.Time
}
