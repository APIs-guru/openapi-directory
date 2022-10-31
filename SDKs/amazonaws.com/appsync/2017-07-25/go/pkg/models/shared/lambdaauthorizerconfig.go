package shared



type LambdaAuthorizerConfig struct {
    AuthorizerResultTTLInSeconds *int64 `json:"authorizerResultTtlInSeconds,omitempty"`
    AuthorizerURI string `json:"authorizerUri"`
    IdentityValidationExpression *string `json:"identityValidationExpression,omitempty"`
    
}

