package shared

// AlarmEventActions
// Contains information about one or more alarm actions.
type AlarmEventActions struct {
	AlarmActions []AlarmAction `json:"alarmActions,omitempty"`
}
