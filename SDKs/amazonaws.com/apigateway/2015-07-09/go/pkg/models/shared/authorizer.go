package shared

type Authorizer struct {
	AuthType                     *string             `json:"authType"`
	AuthorizerCredentials        *string             `json:"authorizerCredentials"`
	AuthorizerResultTTLInSeconds *int64              `json:"authorizerResultTtlInSeconds"`
	AuthorizerURI                *string             `json:"authorizerUri"`
	ID                           *string             `json:"id"`
	IdentitySource               *string             `json:"identitySource"`
	IdentityValidationExpression *string             `json:"identityValidationExpression"`
	Name                         *string             `json:"name"`
	ProviderArNs                 []string            `json:"providerARNs"`
	Type                         *AuthorizerTypeEnum `json:"type"`
}
