package shared

type SnoozeAlarmActionRequest struct {
	AlarmModelName string  `json:"alarmModelName"`
	KeyValue       *string `json:"keyValue"`
	Note           *string `json:"note"`
	RequestID      string  `json:"requestId"`
	SnoozeDuration int64   `json:"snoozeDuration"`
}
