package shared

// AdminResetUserPasswordRequest
// Represents the request to reset a user's password as an administrator.
type AdminResetUserPasswordRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
