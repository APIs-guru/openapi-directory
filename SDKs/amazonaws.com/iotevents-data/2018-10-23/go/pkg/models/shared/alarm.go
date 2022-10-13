package shared

import (
	"time"
)

type Alarm struct {
	AlarmModelName    *string     `json:"alarmModelName"`
	AlarmModelVersion *string     `json:"alarmModelVersion"`
	AlarmState        *AlarmState `json:"alarmState"`
	CreationTime      *time.Time  `json:"creationTime"`
	KeyValue          *string     `json:"keyValue"`
	LastUpdateTime    *time.Time  `json:"lastUpdateTime"`
	Severity          *int64      `json:"severity"`
}
