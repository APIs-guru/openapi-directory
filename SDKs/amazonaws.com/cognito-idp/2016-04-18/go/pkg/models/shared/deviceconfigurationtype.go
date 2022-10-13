package shared

type DeviceConfigurationType struct {
	ChallengeRequiredOnNewDevice     *bool `json:"ChallengeRequiredOnNewDevice"`
	DeviceOnlyRememberedOnUserPrompt *bool `json:"DeviceOnlyRememberedOnUserPrompt"`
}
