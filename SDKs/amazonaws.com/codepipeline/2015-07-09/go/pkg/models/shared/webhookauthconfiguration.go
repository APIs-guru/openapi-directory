package shared



type WebhookAuthConfiguration struct {
    AllowedIPRange *string `json:"AllowedIPRange,omitempty"`
    SecretToken *string `json:"SecretToken,omitempty"`
    
}

