package shared

import (
	"time"
)

type UpdateAlarmModelResponse struct {
	AlarmModelArn     *string                      `json:"alarmModelArn"`
	AlarmModelVersion *string                      `json:"alarmModelVersion"`
	CreationTime      *time.Time                   `json:"creationTime"`
	LastUpdateTime    *time.Time                   `json:"lastUpdateTime"`
	Status            *AlarmModelVersionStatusEnum `json:"status"`
}
