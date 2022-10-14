package shared

type ListAlarmsResponse struct {
	AlarmSummaries []AlarmSummary `json:"alarmSummaries,omitempty"`
	NextToken      *string        `json:"nextToken,omitempty"`
}
