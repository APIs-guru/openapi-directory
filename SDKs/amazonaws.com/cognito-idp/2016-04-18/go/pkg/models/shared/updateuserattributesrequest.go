package shared

// UpdateUserAttributesRequest
// Represents the request to update user attributes.
type UpdateUserAttributesRequest struct {
	AccessToken    string            `json:"AccessToken"`
	ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
	UserAttributes []AttributeType   `json:"UserAttributes"`
}
