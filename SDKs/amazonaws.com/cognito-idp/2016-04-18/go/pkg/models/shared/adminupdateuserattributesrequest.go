package shared

// AdminUpdateUserAttributesRequest
// Represents the request to update the user's attributes as an administrator.
type AdminUpdateUserAttributesRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
	UserAttributes []AttributeType   `json:"UserAttributes"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
