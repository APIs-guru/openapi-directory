package shared

// EnableAlarmActionRequest
// Information needed to enable the alarm.
type EnableAlarmActionRequest struct {
	AlarmModelName string  `json:"alarmModelName"`
	KeyValue       *string `json:"keyValue,omitempty"`
	Note           *string `json:"note,omitempty"`
	RequestID      string  `json:"requestId"`
}
