package shared

import (
	"time"
)

// AlarmModelSummary
// Contains a summary of an alarm model.
type AlarmModelSummary struct {
	AlarmModelDescription *string    `json:"alarmModelDescription,omitempty"`
	AlarmModelName        *string    `json:"alarmModelName,omitempty"`
	CreationTime          *time.Time `json:"creationTime,omitempty"`
}
