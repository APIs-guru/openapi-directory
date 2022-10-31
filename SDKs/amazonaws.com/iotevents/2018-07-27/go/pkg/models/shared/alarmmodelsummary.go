package shared

import (
"time")

type AlarmModelSummary struct {
    AlarmModelDescription *string `json:"alarmModelDescription,omitempty"`
    AlarmModelName *string `json:"alarmModelName,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    
}

