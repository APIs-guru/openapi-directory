package shared

type Parameters struct {
	ExcludeBootVolume *bool `json:"ExcludeBootVolume,omitempty"`
	NoReboot          *bool `json:"NoReboot,omitempty"`
}
