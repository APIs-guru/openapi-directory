package shared

import (
	"time"
)

type DescribeAlarmModelResponse struct {
	AlarmCapabilities     *AlarmCapabilities           `json:"alarmCapabilities"`
	AlarmEventActions     *AlarmEventActions           `json:"alarmEventActions"`
	AlarmModelArn         *string                      `json:"alarmModelArn"`
	AlarmModelDescription *string                      `json:"alarmModelDescription"`
	AlarmModelName        *string                      `json:"alarmModelName"`
	AlarmModelVersion     *string                      `json:"alarmModelVersion"`
	AlarmNotification     *AlarmNotification           `json:"alarmNotification"`
	AlarmRule             *AlarmRule                   `json:"alarmRule"`
	CreationTime          *time.Time                   `json:"creationTime"`
	Key                   *string                      `json:"key"`
	LastUpdateTime        *time.Time                   `json:"lastUpdateTime"`
	RoleArn               *string                      `json:"roleArn"`
	Severity              *int64                       `json:"severity"`
	Status                *AlarmModelVersionStatusEnum `json:"status"`
	StatusMessage         *string                      `json:"statusMessage"`
}
