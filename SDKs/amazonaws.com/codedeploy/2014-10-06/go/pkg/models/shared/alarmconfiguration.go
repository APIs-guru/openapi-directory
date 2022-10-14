package shared

type AlarmConfiguration struct {
	Alarms                 []Alarm `json:"alarms,omitempty"`
	Enabled                *bool   `json:"enabled,omitempty"`
	IgnorePollAlarmFailure *bool   `json:"ignorePollAlarmFailure,omitempty"`
}
