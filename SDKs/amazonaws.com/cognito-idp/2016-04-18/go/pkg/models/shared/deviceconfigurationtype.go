package shared



type DeviceConfigurationType struct {
    ChallengeRequiredOnNewDevice *bool `json:"ChallengeRequiredOnNewDevice,omitempty"`
    DeviceOnlyRememberedOnUserPrompt *bool `json:"DeviceOnlyRememberedOnUserPrompt,omitempty"`
    
}

