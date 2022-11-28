package shared

// CreateBackendAuthIdentityPoolConfig
// Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
type CreateBackendAuthIdentityPoolConfig struct {
	IdentityPoolName     string `json:"IdentityPoolName"`
	UnauthenticatedLogin bool   `json:"UnauthenticatedLogin"`
}
