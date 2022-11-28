package shared

// CreateBackendAuthMfaConfig
// Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
type CreateBackendAuthMfaConfig struct {
	MfaMode  MfaModeEnum `json:"MFAMode"`
	Settings *Settings   `json:"Settings,omitempty"`
}
