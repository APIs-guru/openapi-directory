package shared

import (
	"time"
)

type AlarmModelSummary struct {
	AlarmModelDescription *string    `json:"alarmModelDescription"`
	AlarmModelName        *string    `json:"alarmModelName"`
	CreationTime          *time.Time `json:"creationTime"`
}
