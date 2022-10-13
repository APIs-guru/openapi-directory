package shared

type AdminUpdateUserAttributesRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata"`
	UserAttributes []AttributeType   `json:"UserAttributes"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
