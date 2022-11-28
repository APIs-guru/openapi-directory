package shared

// TrackingConfig
// Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
type TrackingConfig struct {
	Autotrack CriticalityEnum `json:"autotrack"`
}
