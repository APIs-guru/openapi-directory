package shared

// VerifyUserAttributeRequest
// Represents the request to verify user attributes.
type VerifyUserAttributeRequest struct {
	AccessToken   string `json:"AccessToken"`
	AttributeName string `json:"AttributeName"`
	Code          string `json:"Code"`
}
