package shared

import (
	"time"
)

// HistoryRecordEntry
// Describes an event in the history of an EC2 Fleet.
type HistoryRecordEntry struct {
	EventInformation *EventInformation
	EventType        *FleetEventTypeEnum
	Timestamp        *time.Time
}
