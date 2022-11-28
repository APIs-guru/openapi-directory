package shared

// Parameters
// Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
type Parameters struct {
	ExcludeBootVolume *bool `json:"ExcludeBootVolume,omitempty"`
	NoReboot          *bool `json:"NoReboot,omitempty"`
}
