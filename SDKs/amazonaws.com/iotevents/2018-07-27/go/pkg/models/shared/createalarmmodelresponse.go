package shared

import (
	"time"
)

type CreateAlarmModelResponse struct {
	AlarmModelArn     *string                      `json:"alarmModelArn,omitempty"`
	AlarmModelVersion *string                      `json:"alarmModelVersion,omitempty"`
	CreationTime      *time.Time                   `json:"creationTime,omitempty"`
	LastUpdateTime    *time.Time                   `json:"lastUpdateTime,omitempty"`
	Status            *AlarmModelVersionStatusEnum `json:"status,omitempty"`
}
