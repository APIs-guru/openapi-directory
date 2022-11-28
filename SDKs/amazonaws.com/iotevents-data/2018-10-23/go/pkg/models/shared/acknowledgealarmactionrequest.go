package shared

// AcknowledgeAlarmActionRequest
// Information needed to acknowledge the alarm.
type AcknowledgeAlarmActionRequest struct {
	AlarmModelName string  `json:"alarmModelName"`
	KeyValue       *string `json:"keyValue,omitempty"`
	Note           *string `json:"note,omitempty"`
	RequestID      string  `json:"requestId"`
}
