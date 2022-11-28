package shared

// DeviceConfigurationType
// The configuration for the user pool's device tracking.
type DeviceConfigurationType struct {
	ChallengeRequiredOnNewDevice     *bool `json:"ChallengeRequiredOnNewDevice,omitempty"`
	DeviceOnlyRememberedOnUserPrompt *bool `json:"DeviceOnlyRememberedOnUserPrompt,omitempty"`
}
