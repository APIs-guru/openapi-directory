package shared

// GetUserAttributeVerificationCodeRequest
// Represents the request to get user attribute verification.
type GetUserAttributeVerificationCodeRequest struct {
	AccessToken    string            `json:"AccessToken"`
	AttributeName  string            `json:"AttributeName"`
	ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
}
