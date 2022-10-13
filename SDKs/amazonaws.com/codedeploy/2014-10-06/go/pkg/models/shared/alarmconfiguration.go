package shared

type AlarmConfiguration struct {
	Alarms                 []Alarm `json:"alarms"`
	Enabled                *bool   `json:"enabled"`
	IgnorePollAlarmFailure *bool   `json:"ignorePollAlarmFailure"`
}
