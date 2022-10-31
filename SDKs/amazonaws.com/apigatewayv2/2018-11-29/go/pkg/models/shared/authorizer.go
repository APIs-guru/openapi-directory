package shared



type Authorizer struct {
    AuthorizerCredentialsArn *string `json:"AuthorizerCredentialsArn,omitempty"`
    AuthorizerID *string `json:"AuthorizerId,omitempty"`
    AuthorizerPayloadFormatVersion *string `json:"AuthorizerPayloadFormatVersion,omitempty"`
    AuthorizerResultTTLInSeconds *int64 `json:"AuthorizerResultTtlInSeconds,omitempty"`
    AuthorizerType *AuthorizerTypeEnum `json:"AuthorizerType,omitempty"`
    AuthorizerURI *string `json:"AuthorizerUri,omitempty"`
    EnableSimpleResponses *bool `json:"EnableSimpleResponses,omitempty"`
    IdentitySource []string `json:"IdentitySource,omitempty"`
    IdentityValidationExpression *string `json:"IdentityValidationExpression,omitempty"`
    JwtConfiguration *JwtConfiguration `json:"JwtConfiguration,omitempty"`
    Name string `json:"Name"`
    
}

