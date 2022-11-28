package shared

// CloudwatchAlarmAction
// Describes an action that updates a CloudWatch alarm.
type CloudwatchAlarmAction struct {
	AlarmName   string `json:"alarmName"`
	RoleArn     string `json:"roleArn"`
	StateReason string `json:"stateReason"`
	StateValue  string `json:"stateValue"`
}
