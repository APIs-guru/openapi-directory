package shared

type DisableAlarmActionRequest struct {
	AlarmModelName string  `json:"alarmModelName"`
	KeyValue       *string `json:"keyValue"`
	Note           *string `json:"note"`
	RequestID      string  `json:"requestId"`
}
