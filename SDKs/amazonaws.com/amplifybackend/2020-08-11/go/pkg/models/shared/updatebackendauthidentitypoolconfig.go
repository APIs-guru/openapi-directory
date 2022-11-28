package shared

// UpdateBackendAuthIdentityPoolConfig
// Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
type UpdateBackendAuthIdentityPoolConfig struct {
	UnauthenticatedLogin *bool `json:"UnauthenticatedLogin,omitempty"`
}
