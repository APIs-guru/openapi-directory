package shared

import (
"time")

type Alarm struct {
    AlarmModelName *string `json:"alarmModelName,omitempty"`
    AlarmModelVersion *string `json:"alarmModelVersion,omitempty"`
    AlarmState *AlarmState `json:"alarmState,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    KeyValue *string `json:"keyValue,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Severity *int64 `json:"severity,omitempty"`
    
}

