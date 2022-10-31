package shared

import (
	"time"
)

type AlarmModelVersionSummary struct {
	AlarmModelArn     *string                      `json:"alarmModelArn,omitempty"`
	AlarmModelName    *string                      `json:"alarmModelName,omitempty"`
	AlarmModelVersion *string                      `json:"alarmModelVersion,omitempty"`
	CreationTime      *time.Time                   `json:"creationTime,omitempty"`
	LastUpdateTime    *time.Time                   `json:"lastUpdateTime,omitempty"`
	RoleArn           *string                      `json:"roleArn,omitempty"`
	Status            *AlarmModelVersionStatusEnum `json:"status,omitempty"`
	StatusMessage     *string                      `json:"statusMessage,omitempty"`
}
