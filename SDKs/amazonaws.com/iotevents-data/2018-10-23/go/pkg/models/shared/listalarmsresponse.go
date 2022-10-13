package shared

type ListAlarmsResponse struct {
	AlarmSummaries []AlarmSummary `json:"alarmSummaries"`
	NextToken      *string        `json:"nextToken"`
}
