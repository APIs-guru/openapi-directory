package shared

// LambdaAuthorizerConfig
// A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
type LambdaAuthorizerConfig struct {
	AuthorizerResultTTLInSeconds *int64  `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerURI                string  `json:"authorizerUri"`
	IdentityValidationExpression *string `json:"identityValidationExpression,omitempty"`
}
