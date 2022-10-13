package shared

type UpdateUserAttributesRequest struct {
	AccessToken    string            `json:"AccessToken"`
	ClientMetadata map[string]string `json:"ClientMetadata"`
	UserAttributes []AttributeType   `json:"UserAttributes"`
}
