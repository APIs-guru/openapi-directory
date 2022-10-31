package shared

import (
	"time"
)

type AlarmSummary struct {
	AlarmModelName    *string             `json:"alarmModelName,omitempty"`
	AlarmModelVersion *string             `json:"alarmModelVersion,omitempty"`
	CreationTime      *time.Time          `json:"creationTime,omitempty"`
	KeyValue          *string             `json:"keyValue,omitempty"`
	LastUpdateTime    *time.Time          `json:"lastUpdateTime,omitempty"`
	StateName         *AlarmStateNameEnum `json:"stateName,omitempty"`
}
