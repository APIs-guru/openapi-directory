package shared

import (
	"time"
)

type AlarmModelVersionSummary struct {
	AlarmModelArn     *string                      `json:"alarmModelArn"`
	AlarmModelName    *string                      `json:"alarmModelName"`
	AlarmModelVersion *string                      `json:"alarmModelVersion"`
	CreationTime      *time.Time                   `json:"creationTime"`
	LastUpdateTime    *time.Time                   `json:"lastUpdateTime"`
	RoleArn           *string                      `json:"roleArn"`
	Status            *AlarmModelVersionStatusEnum `json:"status"`
	StatusMessage     *string                      `json:"statusMessage"`
}
