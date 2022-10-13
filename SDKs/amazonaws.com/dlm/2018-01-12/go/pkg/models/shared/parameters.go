package shared

type Parameters struct {
	ExcludeBootVolume *bool `json:"ExcludeBootVolume"`
	NoReboot          *bool `json:"NoReboot"`
}
