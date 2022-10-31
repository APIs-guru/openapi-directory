package shared



type ListWebhooksOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Webhooks []ListWebhookItem `json:"webhooks,omitempty"`
    
}

