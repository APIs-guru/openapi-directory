package shared



type WebhookFilter struct {
    ExcludeMatchedPattern *bool `json:"excludeMatchedPattern,omitempty"`
    Pattern string `json:"pattern"`
    Type WebhookFilterTypeEnum `json:"type"`
    
}

