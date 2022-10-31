package shared



type ListWebhooksResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Webhooks []Webhook `json:"webhooks"`
    
}

