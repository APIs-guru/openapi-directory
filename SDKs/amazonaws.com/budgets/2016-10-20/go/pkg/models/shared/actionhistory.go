package shared

import (
	"time"
)

// ActionHistory
//
//	The historical records for a budget action.
type ActionHistory struct {
	ActionHistoryDetails ActionHistoryDetails `json:"ActionHistoryDetails"`
	EventType            EventTypeEnum        `json:"EventType"`
	Status               ActionStatusEnum     `json:"Status"`
	Timestamp            time.Time            `json:"Timestamp"`
}
