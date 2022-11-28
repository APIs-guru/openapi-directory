package shared

// Alarm
// Represents a CloudWatch alarm associated with a scaling policy.
type Alarm struct {
	AlarmArn  string `json:"AlarmARN"`
	AlarmName string `json:"AlarmName"`
}
