package shared

// UpdateBackendAuthMfaConfig
// Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
type UpdateBackendAuthMfaConfig struct {
	MfaMode  *MfaModeEnum `json:"MFAMode,omitempty"`
	Settings *Settings    `json:"Settings,omitempty"`
}
