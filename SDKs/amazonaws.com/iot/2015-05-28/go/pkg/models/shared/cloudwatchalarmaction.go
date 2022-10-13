package shared

type CloudwatchAlarmAction struct {
	AlarmName   string `json:"alarmName"`
	RoleArn     string `json:"roleArn"`
	StateReason string `json:"stateReason"`
	StateValue  string `json:"stateValue"`
}
