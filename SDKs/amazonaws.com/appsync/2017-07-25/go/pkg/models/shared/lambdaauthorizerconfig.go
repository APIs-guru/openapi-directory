package shared

type LambdaAuthorizerConfig struct {
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds"`
	AuthorizerURI                string  `json:"authorizerUri"`
	IdentityValidationExpression *string `json:"identityValidationExpression"`
}
