package shared

import (
"time")

type DescribeAlarmModelResponse struct {
    AlarmCapabilities *AlarmCapabilities `json:"alarmCapabilities,omitempty"`
    AlarmEventActions *AlarmEventActions `json:"alarmEventActions,omitempty"`
    AlarmModelArn *string `json:"alarmModelArn,omitempty"`
    AlarmModelDescription *string `json:"alarmModelDescription,omitempty"`
    AlarmModelName *string `json:"alarmModelName,omitempty"`
    AlarmModelVersion *string `json:"alarmModelVersion,omitempty"`
    AlarmNotification *AlarmNotification `json:"alarmNotification,omitempty"`
    AlarmRule *AlarmRule `json:"alarmRule,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Key *string `json:"key,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    Severity *int64 `json:"severity,omitempty"`
    Status *AlarmModelVersionStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    
}

