package shared



type ResetAlarmActionRequest struct {
    AlarmModelName string `json:"alarmModelName"`
    KeyValue *string `json:"keyValue,omitempty"`
    Note *string `json:"note,omitempty"`
    RequestID string `json:"requestId"`
    
}

