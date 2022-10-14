package shared

type AdminUpdateUserAttributesRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
	UserAttributes []AttributeType   `json:"UserAttributes"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
