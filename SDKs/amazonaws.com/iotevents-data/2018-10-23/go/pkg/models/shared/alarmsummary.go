package shared

import (
	"time"
)

type AlarmSummary struct {
	AlarmModelName    *string             `json:"alarmModelName"`
	AlarmModelVersion *string             `json:"alarmModelVersion"`
	CreationTime      *time.Time          `json:"creationTime"`
	KeyValue          *string             `json:"keyValue"`
	LastUpdateTime    *time.Time          `json:"lastUpdateTime"`
	StateName         *AlarmStateNameEnum `json:"stateName"`
}
