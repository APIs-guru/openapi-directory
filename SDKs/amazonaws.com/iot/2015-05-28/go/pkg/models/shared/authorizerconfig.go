package shared



type AuthorizerConfig struct {
    AllowAuthorizerOverride *bool `json:"allowAuthorizerOverride,omitempty"`
    DefaultAuthorizerName *string `json:"defaultAuthorizerName,omitempty"`
    
}

