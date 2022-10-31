package shared



type Authorizer struct {
    AuthType *string `json:"authType,omitempty"`
    AuthorizerCredentials *string `json:"authorizerCredentials,omitempty"`
    AuthorizerResultTTLInSeconds *int64 `json:"authorizerResultTtlInSeconds,omitempty"`
    AuthorizerURI *string `json:"authorizerUri,omitempty"`
    ID *string `json:"id,omitempty"`
    IdentitySource *string `json:"identitySource,omitempty"`
    IdentityValidationExpression *string `json:"identityValidationExpression,omitempty"`
    Name *string `json:"name,omitempty"`
    ProviderArNs []string `json:"providerARNs,omitempty"`
    Type *AuthorizerTypeEnum `json:"type,omitempty"`
    
}

